import { css } from 'solid-styled';

type WrapperProps = {
    children?: any
    visible: boolean
}

function Wrapper(props: WrapperProps) {
    css`
        .wrapper {
            position: fixed;
            top:0;
            left:0;
            right:0;
            bottom:0;
            background:rgba(0,0,0,0.3);
            z-index:2147483647;
            align-items: center;
            display:none;
            justify-content: center;
            font-family: system-ui;
        }
        .wrapper.visible {
            display: flex;
        }
           `
        return <div classList={{ wrapper: true, visible: props.visible }}>
            {props.children}</div>;
}

export default Wrapper;
