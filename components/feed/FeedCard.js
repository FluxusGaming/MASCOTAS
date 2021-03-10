import styles from "../../styles/FeedCard.module.css";
import Avatar from "@material-ui/core/Avatar";
import { FaRegHeart, FaRegComment, FaPaperPlane } from "react-icons/fa";
import { IoEllipsisHorizontal } from "react-icons/io5";
import FeedDropdown from "./FeedDropdown";
export default function FeedCard({ user, thumbnail }) {
  return (
    <div className={styles.feed__card}>
      <div className={styles.feed__card__user__bar}>
        <Avatar
          style={{ height: "40px", width: "40px" }}
          alt="profile"
          src={
            "https://avatars.githubusercontent.com/u/20648944?s=460&u=b861ca307ee6726b19f99d439a919ef6054b50fd&v=4"
          }
        >
          {user?.username[0]}
        </Avatar>
        <p className={styles.feed__card__username}>{user.username}</p>
        <FeedDropdown />
      </div>
      <img className={styles.feed__card__img} src={thumbnail}></img>
      <div className={styles.feed__card__bottom__bar}>
        <div className={styles.feed__card__icons}>
          <FaRegHeart />
          <FaRegComment />
          <FaPaperPlane />
        </div>
        <div className={styles.feed__card__likes}>
          <p>50 Me gusta</p>
        </div>
      </div>
    </div>
  );
}
