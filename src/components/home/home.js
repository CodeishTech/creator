import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faList, faPlusCircle, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faListAlt, faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { textButton } from '../../styles/style';
import CreateArticle from '../articles/createArticle';
import AllArticles from '../articles/allArticles';
import AddCategory from '../category_subject/add_category';
import AllCategories from '../category_subject/all_categories';
import AddSubject from '../category_subject/add_subject';
import AllSubjects from '../category_subject/all_subjects';
import { user } from '../../utils/user';
import { useNavigate } from 'react-router-dom';

export default function Main() {

  const [open, setOpen] = useState("myarticles");

  var navigate = useNavigate();

  useEffect(() => {
    if(user==="no user"){
      navigate("/creator");
    }
  },[navigate]);

  return (
    <>
      <div className="w-full flex flex-row">
        <div className="w-1/6 bg-navblue dark:bg-gray-900 text-white h-screen flex-col px-8 text-md">
          <ul className="space-y-8 py-8">
            <li>
              <button className={textButton} onClick={()=>setOpen("myarticles")} ><FontAwesomeIcon icon={faList} /> &nbsp;&nbsp; All Articles</button>
            </li>
            <li>
              <button className={textButton} onClick={()=>setOpen("writearticle")} ><FontAwesomeIcon icon={faPenToSquare} /> &nbsp;&nbsp; Write Article</button>
            </li>
            <li>
              <button className={textButton} onClick={()=>setOpen("newcategory")} ><FontAwesomeIcon icon={faPlusCircle} /> &nbsp;&nbsp; New Category</button>
            </li>
            <li>
              <button className={textButton} onClick={()=>setOpen("allcategories")} ><FontAwesomeIcon icon={faBarsStaggered} /> &nbsp;&nbsp; All Categories</button>
            </li>
            <li>
              <button className={textButton} onClick={()=>setOpen("newsubject")} ><FontAwesomeIcon icon={faPlusSquare} /> &nbsp;&nbsp; New Subject</button>
            </li>
            <li>
              <button className={textButton} onClick={()=>setOpen("allsubjects")} ><FontAwesomeIcon icon={faListAlt} /> &nbsp;&nbsp; All Subjects</button>
            </li>
          </ul>
        </div>
        <div className="w-5/6 p-6 dark:bg-gray-900 border-l"> 
          {open==="writearticle" &&
            <CreateArticle />
          }
          {open==="myarticles" &&
            <AllArticles />
          }
          {open==="newcategory" &&
            <AddCategory />
          }
          {open==="allcategories" &&
            <AllCategories />
          }
          {open==="newsubject" &&
            <AddSubject />
          }
          {open==="allsubjects" &&
            <AllSubjects />
          }
        </div>
      </div>
    </>
  );
}