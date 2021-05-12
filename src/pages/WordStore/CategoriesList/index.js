import ToolBar from "../ToolBar";
import CategoriesOfBook from "./CategoriesOfBook";

export default function CategoriesList() {
    let currentUrl = window.location
    return (
        <div className="container">
            <ToolBar title="3000 TỪ VỰNG THÔNG DỤNG" backLink="/word-store" />
            <div className="row g-2 container-book-list">
                  <CategoriesOfBook name="Cây cối" backLink={window.location}/>
                  <CategoriesOfBook name="Cây cối" backLink={window.location}/>
                  <CategoriesOfBook name="Cây cối" backLink={window.location}/>
                  <CategoriesOfBook name="Cây cối" backLink={window.location}/>
                  <CategoriesOfBook name="Cây cối" backLink={window.location}/>
                  <CategoriesOfBook name="Cây cối" backLink={window.location} />
                  <CategoriesOfBook name="Cây cối" backLink={window.location}/>
                  <CategoriesOfBook name="Cây cối" backLink={window.location}/>
                  <CategoriesOfBook name="Cây cối" backLink={window.location}/>
                  <CategoriesOfBook name="Cây cối" backLink={window.location}/>
                  <CategoriesOfBook name="Cây cối" backLink={window.location}/>
                  <CategoriesOfBook name="Cây cối" backLink={window.location}/>
                  <CategoriesOfBook name="Cây cối"  backLink={window.location}/>
                  <CategoriesOfBook name="Cây cối" backLink={window.location}/>
            </div>
        </div>
    )
}

