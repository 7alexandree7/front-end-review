import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import classes from "./Name.module.css"


const Name = ({ login, avatar_url, bio, followers, following, location }: UserProps) => {

    return (

        <div className={classes.name}>
            <img className={classes.img_name} src={avatar_url} alt={login} />
            <h2>{login}</h2>

            {location && (
                <p className={classes.location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}


            {bio && (
                <p className={classes.bio}>{bio}</p>
                
            )}

            <div className={classes.status}>
                <div>
                    <p>Seguidores:</p>
                    <p className={classes.number}>{followers}</p>
                </div>

                <div>
                    <p>Seguindo:</p>
                    <p className={classes.number}>{following}</p>
                </div>
            </div>


        </div>
    )
}



export default Name;