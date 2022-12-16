export const Wrapper = (props) => (
        <div style={
            {
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center'
            }
        }>
            {props.children}
        </div>
    );