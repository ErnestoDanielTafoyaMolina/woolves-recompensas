import { UserContext } from "./UserContext";

const users = [
    {
        id:1,
        name:'Ernesto Daniel',
        lastname:'Tafoya Molina',
        rol:'admin',
        WP:0
    },
    {
        id:2,
        name:'Ernesto Daniel',
        lastname:'Tafoya Molina',
        rol:'user',
        WP:100 
    }
]

export const UserProvider = ({ children }) => {

// const [user, setUser] = useState(second)
  return (
    <UserContext.Provider value={ users }>
        { children }
    </UserContext.Provider>
  )
}
