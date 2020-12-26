import { errorMessage, successMessage } from './util';

/**
 * @param des test description
 * @param fun function to excecute
 */
const it = (des, fun) => {
    try {
        fun();
        successMessage(des);
    } catch (e) {
        errorMessage(des);
        errorMessage(`Expected: ${e.expected}, Actual: ${e.actual}`);
    }
}

export { it };
