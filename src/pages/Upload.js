    import React from 'react'
    import "./Upload.css"
    import { ToastContainer ,toast } from 'react-toastify';
    import { useEffect } from 'react';

    const Upload = () => {
        const handleSubmit=(event)=>{

            event.preventDefault();
            const form=event.target;
            const title=form.title.value;
            const img=form.img.value;
            const rating=form.rating.value;
            const des=form.des.value;
            const price=form.price.value;
            const quantity=1;

            if(title==="" || img==="" ||des==="" || rating==="" || price==="")
            {toast.warn('fill all fields Required ');}
            else{ 
                const dress={title,img,des,rating,price,quantity};

                // console.log(dress,"dress in object ");
                
                fetch('https://ultras-backend.onrender.com/uploadproduct',{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(dress),
                })
                // .then((res)=>res.json())

                .then((data)=>{
                    toast.success('added successfully');
                    form.reset();
                    window.location.href="/products"
                }
                )
            }
            }
            return (
                <div className='load'>
                    <ToastContainer/>
                <div class="card upload6">
            <div class="card-body upload5">
            <form onSubmit={handleSubmit} >
                <center className='load'><br/>
               <h2>UPLOAD PRODUCT 📤</h2><br/>
              
                <div class="upload0">
                    <label><b>TITLE</b></label>
                    <input type="text" name="title" className='ms-3'/>
                </div><br/>
                <div class="upload1">
                    <label value="img"><b>IMAGE</b></label>
                    <input type='img' name="img" className='ms-3'/>
                </div><br/>
                <div class="upload2">
                    <label value="food"><b>RATING </b></label>
                    <input type='text' name="rating" className='ms-3'/>
                </div><br/>
                    <div class="upload3">
                    <label value="des"><b>DESCT</b></label>
                    <input type='text' name='des' className='ms-3'/>
                    </div><br/>
                    <div class="upload4">
                    <label value="price"><b>PRICE</b></label>
                    <input type='numbers' name='price' className='ms-3'/>
                </div><br/><br/>
                <div class="upload7">
                    <button type="submit" class="btn btn-secondary">upload</button>   <br/><br/>
                </div>
                </center>
            </form>
            </div>
            </div>
        </div>
        
        )
    }
    export default Upload

