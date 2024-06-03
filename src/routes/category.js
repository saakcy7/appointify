import Card from "../components/card";
import {useAuth0} from "@auth0/auth0-react";
import "./categoryStyles.css";
function Category() {
    const {isAuthenticated,user} = useAuth0();
    return(
        <>
            <Card/>
            {
                isAuthenticated && (
                    <div className="user">
                        <h2>Welcome {user.Name}</h2>
                    </div>
                )
            }
        </>
    );
}
export default Category;