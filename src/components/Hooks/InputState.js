import { useState } from "react"
// declared a custom hooks
const useInputState = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);
    const handleChange = e => {
        setValue(e.target.value);
    }
    return [value, handleChange];
}
export default useInputState;