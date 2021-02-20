import './toolbar.css'

type toolBarProps = {
    appTitle: string
    imgProfileURL: string;
}

function ToolBar(props: toolBarProps) {
    return (
        <div className="toolBar">
            <p className="title">{props.appTitle}</p>
        </div>
    );
}

export default ToolBar;