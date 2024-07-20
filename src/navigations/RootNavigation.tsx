import { useSelector } from "react-redux"
import AuthNavigation from "./AuthNavigation"
import HomeStackNavigation from "./HomeStackNavigation"

const RootNavigation = () => {
      let isAuth = useSelector((state: any) => state.auth.isAuth);
      return (
            isAuth ? <HomeStackNavigation />
                  : <AuthNavigation />
      )
}

export default RootNavigation