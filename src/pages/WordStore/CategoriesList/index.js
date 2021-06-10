import React, { useState, useEffect} from 'react';
import ToolBar from "../ToolBar";
import CategoriesOfBook from "./CategoriesOfBook";
import {useParams} from "react-router-dom"
import axios from 'axios'


export default function CategoriesList() {
    const {bookId} = useParams()
    const [categoryData, setCategoryData] = useState(null)

    const initData = async () => {
        if (categoryData == null)  {
            let categoryDataResult = await axios.get("/word/getallcategoryofbook/"+bookId)
            if(categoryDataResult.data.status) setCategoryData(categoryDataResult.data.data)
            else setCategoryData("notFound")
        }
    }
    initData()
    const CategoryListHtml = ()=>{

            let CategoryListHtml = categoryData.map((category)=>{
                return <CategoriesOfBook key={category.COB_Id} name={category.COB_Name}  
                link={bookId+"/"+category.COB_Id} 
                image={category.COB_Image} 
                backLink={window.location} />
            }) 
            return CategoryListHtml
    }
    return (
        <div className="container">
            <ToolBar title="3000 TỪ VỰNG THÔNG DỤNG" backLink="/word-store" />
            <div className="row g-2 container-book-list">
            {(categoryData != null && categoryData != "notFound") ? <CategoryListHtml/> : ""}
            {(categoryData == "notFound") ? <h3 className="toolbar-store">Tạm thời chưa có dữ liệu</h3> : ""}
            </div>
        </div>
    )
}

