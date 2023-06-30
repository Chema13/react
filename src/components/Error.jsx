import PropTypes from 'prop-types'

const Error = ({ children }) => {
    return (
        <div className='text-center bg-red-600 text-white font-bold p-3 uppercase mb-2'>
            {children}
        </div>
    )
}

Error.propTypes = {
    children: PropTypes.any
}


export default Error