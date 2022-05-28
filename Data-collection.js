import {React, useEffect, useState} from "react";
import './Data-collection-styles.css';
import{Button ,TextField} from '@mui/material';
import uploadimage from '../../assets/upload-placeholder.png - Copy.png';
import { async } from "@firebase/util";
import { ref, uploadBytes , getDownloadURL } from "firebase/storage";
import { firebaseStorage } from '../../Backend/firebase-handler';

const DataCollec =()=>{

    const[productinfo , setProductInfo] = useState({
        productimage:"",
        prouctname:"",
        productprice:"",
        productMRP:""
    });


    useEffect(()=>{
        if(!productinfo.productprice){
        setProductInfo({
            ...productinfo,
            "productMRP":0,
        })
        }else{
            const MRP=(parseFloat(productinfo.productprice) * 0.18) + parseFloat(productinfo.productprice);
        setProductInfo({
            ...productinfo,
            "productMRP":MRP,
        })

        }
    } , [productinfo.productprice])

    const handleChange=event=>{
        const {name,value}=event.target;
        setProductInfo({
            ...productinfo,
            [name]:value
        })
    }

    const handleimage =()=>{

        const tempele =document.createElement('input');
        tempele.setAttribute('type',"file");
        tempele.onchange = async(event) =>{

            const file= event.target.files[0];
            const fileRef = ref(firebaseStorage , `TEMP_FOLDER/file`);
            await uploadBytes(fileRef,file);
            const downloadURL = await getDownloadURL(fileRef);
            setProductInfo({
                ...productinfo,
                "productimage": downloadURL,
            })

            alert("File uploaded")
          
        }

        tempele.click();
    }

    return(
        <div className="data1">
            <div className="data2">
                <img className="data3" onClick={handleimage} src={productinfo.productimage?productinfo.productimage:uploadimage} alt="upload image"/>
                <TextField name={"productname"} value  = {productinfo.productname} onChange={handleChange} sx={{width:'600px', marginbottom:'20px'}} id="outlined-basic" label="Product Name" variant="outlined" />
                <TextField name={"productprice"} type={"number"} value  = {productinfo.productprice} onChange={handleChange} sx={{width:'600px', marginbottom:'20px'}} id="outlined-basic" label="Product Price" variant="outlined" />
                <TextField value = {productinfo.productMRP} sx={{width:'600px', marginbottom:'20px'}} id="outlined-basic" label="MRP" variant="outlined" />
                <Button variant="contained" >Save </Button>
            </div>
        </div>
    )
}
export default DataCollec;