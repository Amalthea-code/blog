import {FC} from "react";
import './CodeRender.scss'
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
interface Props {
    code?: void,
}
const CodeRender: FC<Props> = () => {
    const input = 0
    return (
        <div className="code-render">
            <div className="code__block">
                <div className="code__block-input">{ input }</div>
                <div className="code__block-function"></div>
                <div className="code__block-result"></div>
            </div>
            <div className="code-render__unit">
                <button className="code-render__stop">stop</button>
                <button className="code-render__start">start</button>
            </div>
        </div>
    )
}
export default CodeRender;