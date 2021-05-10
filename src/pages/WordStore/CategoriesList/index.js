import ToolBar from "../ToolBar";
import CategoriesOfBook from "./CategoriesOfBook";

export default function CategoriesList() {
    return (
        <div className="container">
            <ToolBar />
            <div className="row g-2 container-book-list">
                  <CategoriesOfBook/>
                  <CategoriesOfBook/>
                  <CategoriesOfBook/>
                  <CategoriesOfBook/>
                  <CategoriesOfBook/>
                  <CategoriesOfBook/>
                  <CategoriesOfBook/>
                  <CategoriesOfBook/>
                  <CategoriesOfBook/>
                  <CategoriesOfBook/>
                  <CategoriesOfBook/>
                  <CategoriesOfBook/>
            </div>
        </div>
    )
}

