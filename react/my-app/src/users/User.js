export const User = ({ user }) => {
    const areaCodeEndIndex = user.phone.indexOf(')');
    const areaCode = user.phone.slice(0, areaCodeEndIndex + 1);
    const actualPhoneNumber = user.phone.slice(areaCodeEndIndex + 1);

    return <li>
        {user.name} works in {user.company.name} <br />
        <i>{areaCode}</i> {actualPhoneNumber}
    </li>
}