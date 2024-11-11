import { useNavigate } from "react-router-dom"
import { v4 } from "uuid"

import { TOOLS_APP_ROUTES } from "constants/routes"
import Input from "components/Input/Input"

import { LayoutProps } from "./types"
import {
  LayoutWrapper,
  AppHeader,
  AppTitle,
  HeaderLink,
  HeaderNav,
  AppMain,
  AppFooter,
  FooterNav,
  FooterLink,
} from "./styles"

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const goToHomePage = () => {
    navigate(TOOLS_APP_ROUTES.HOME)
  }
  const appLinksHeader = {
    [TOOLS_APP_ROUTES.HOME]: "Home",
    [TOOLS_APP_ROUTES.ADD_ADVERTS]: "Add Adverts",
    [TOOLS_APP_ROUTES.LOGIN]: "Login",
    // [TOOLS_APP_ROUTES.PROFILE]: "Profile",
  }

  const appLinksFooter = {
    [TOOLS_APP_ROUTES.HELP]: "Help",
    [TOOLS_APP_ROUTES.ADVERTISING]: "Advertising",
    [TOOLS_APP_ROUTES.ABOUT_US]: "About us",
    [TOOLS_APP_ROUTES.CONTACTS]: "Contacts",
    [TOOLS_APP_ROUTES.PRIVACY_POLICY]: "Privacy policy",
    [TOOLS_APP_ROUTES.CONDITIONS]: "Conditions of use",
    [TOOLS_APP_ROUTES.IMPRINT]: "Imprint",
    [TOOLS_APP_ROUTES.SOCIAL_MEDIA]: "Social media",

  }
  const headerLinks = Object.keys(appLinksHeader).map((link: string) => {
    return (
      <HeaderLink
        key={v4()}
        style={({ isActive }) => ({
        //   fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "underline" : "none",
        })}
        to={link}
      >
        {appLinksHeader[link as keyof typeof appLinksHeader]}
      </HeaderLink>
    )
  })

    const footerLinks = Object.keys(appLinksFooter).map((link: string) => {
      return (
        <FooterLink key={v4()} to={link}>
          {appLinksFooter[link as keyof typeof appLinksFooter]}
        </FooterLink>
      );
    });
  return (
    <LayoutWrapper>
      <AppHeader>
        <AppTitle onClick={goToHomePage}>RENTIFY TOOLS</AppTitle>
        <Input id="" name="tool" placeholder="Search tool"></Input>
        <HeaderNav>
          <HeaderNav>{headerLinks}</HeaderNav>
          {/* <HeaderLink to={TOOLS_APP_ROUTES.HOME}>Home</HeaderLink>
          <HeaderLink to={TOOLS_APP_ROUTES.ADD_ADVERTS}>Add Adverts</HeaderLink>
          <HeaderLink to={TOOLS_APP_ROUTES.LOGIN}>Login</HeaderLink> */}
        </HeaderNav>
      </AppHeader>
      <AppMain>{children}</AppMain>
      <AppFooter>
        <FooterNav>{footerLinks}</FooterNav>
      </AppFooter>
    </LayoutWrapper>
  )
}

export default Layout
