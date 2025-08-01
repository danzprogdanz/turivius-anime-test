import type { PageRootLayoutProps } from "./types";
import { ImageLayoutStyled, PageLayoutStyled, PageRootLayoutStyled } from "./styled";

export const PageRootLayout: React.FC<PageRootLayoutProps> = ({ children }) => {
    return (
        <PageRootLayoutStyled>
            <PageLayoutStyled>{children}</PageLayoutStyled>
            <ImageLayoutStyled/>
        </PageRootLayoutStyled>
    );
};