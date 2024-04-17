export const fetchUsers = async () => {
    const res = await fetch("https://randomuser.me/api/?results=500 ");
    return res.json();
};