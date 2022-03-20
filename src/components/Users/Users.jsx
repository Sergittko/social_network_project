import React from "react";
import usersCss from "./Users.module.css";
import UserItem from "./UserItem/UserItem";
import Preloader from "../common/preloader/Preloader";
import preloaderGif from "../../img/preloader.gif";
import Pagination from "react-js-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

let Users = props => {
  let [searchFollowed, changeSearch]=React.useState(true);
  let changeSearchSettings = () =>{
    changeSearch(!searchFollowed);
    props.setFollowedUsers(searchFollowed);
  };

  let getPageNumber = newPage => {
    props.setCurrentPage(newPage, searchFollowed);
  };
  let totalPages = Math.ceil(props.totalCount / props.pageSize);
  return (
    <div>
      <div className={usersCss.pagination}>
        <p className={usersCss.searchFilter} onClick={changeSearchSettings}><span><FontAwesomeIcon icon={faArrowLeft} /></span>{searchFollowed? 'show followed users' : 'show all users'}</p>
        <Pagination
          pageRangeDisplayed={5}
          onChange={getPageNumber.bind(this)}
          activePage={props.currentPage}
          totalItemsCount={props.totalCount}
          itemsCountPerPage={props.pageSize}
          activeClass={usersCss.activeElement}
          firstPageText={"First"}
          lastPageText={"Last"}
          prevPageText={<FontAwesomeIcon icon={faAngleLeft} />}
          nextPageText={<FontAwesomeIcon icon={faAngleRight} />}
          itemClassFirst={
            props.currentPage >= 4 ? usersCss.first : usersCss.disabled
          }
          itemClassLast={
            props.currentPage <= totalPages - 3
              ? usersCss.last
              : usersCss.disabled
          }
          itemClassPrev={
            props.currentPage === 1 ? usersCss.disabled : usersCss.prev
          }
          itemClassNext={
            props.currentPage === totalPages ? usersCss.disabled : usersCss.next
          }
        />
      </div>

      {props.isLoading ? (
        <Preloader preloaderGif={preloaderGif} />
      ) : (
        <div>
          {props.users.map(user => {
            return (
              <UserItem
                user={user}
                key={user.id}
                follow={props.follow}
                unFollow={props.unFollow}
                follolwIsFetching={props.follolwIsFetching}
                isFetching={props.isFetching}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Users;

// <div className={usersCss.pagination}>
// {
//   // let pagesCount = [];
//   // let totalPages = Math.ceil(props.totalCount / props.pageSize);
//   // for (let i = 1; i <= totalPages; i++) {
//     //   if (i === 8) break;
//     //   pagesCount.push(i);
//     // }
//     /* pagesCount.map(p => {
//       return (
//         <span
//         onClick={() => props.setCurrentPage(p)}
//         className={props.currentPage === p ? usersCss.activeElement : ""}
//         key={p}
//         >
//         {p}
//         </span>
//       );
//     }) */
//   }
//   </div>
