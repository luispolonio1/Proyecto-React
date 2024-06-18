import PropTypes from 'prop-types'


export function Button({text}){
    console.log(text)
    return <button>
        {text}
    </button>
}


Button.propTypes={
    text:PropTypes.string.isRequired
}