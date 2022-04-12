import { HeaderComponent } from "./HeaderComponoent"
import { FooterComponent } from "./FooterComponent"

export function LayoutComponent(props){
    return(
        <>
            <HeaderComponent />
            {props.children}
            <FooterComponent />
        </>
    )
}