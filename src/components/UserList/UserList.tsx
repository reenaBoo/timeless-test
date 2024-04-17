import {useQuery} from "react-query";
import {fetchUsers} from "../../api/getUsers.tsx";

const UserList = () => {
    const {data, isLoading} = useQuery("users", fetchUsers);

    console.log('response', data)

    if (isLoading) return <p>Загрузка...</p>;

    return (
        <div>
            test
        </div>
    );
};

export default UserList;