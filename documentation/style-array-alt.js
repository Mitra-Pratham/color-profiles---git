const styleArray = [
    {
      name: "--anchor-color",
      value: "#0067D2",
      text: "Changes the anchor tag/hyper link color in the TeamConnect UI	",
    },
    {
      name: "--anchor-color-hover",
      value: "#014073",
      text: "Changes the anchor tag/hyper link hover color in the TeamConnect UI",
    },
    {
      name: "--button-color",
      value: "#C7D3DF",
      text: "Changes the button color in the TeamConnect UI	",
    },
    {
      name: "--button-color-hover",
      value: "#E3E9EF",
      text: "Changes the button hover color in the TeamConnect UI	",
    },
    {
      name: "--button-text-color",
      value: "#242A30",
      text: "Changes the button's inner text color in the TeamConnect UI	",
    },
    {
      name: "--background-color",
      value: "#F9FAFC",
      text: "Changes the base background color in the TeamConnect UI	",
    },
    {
      name: "--text-field-labels",
      value: "#001A35",
      text: "Changes the text field label's color in the TeamConnect UI	",
    },
    {
      name: "--text-field",
      value: "#242A30",
      text: "Changes the text field's color in the TeamConnect UI	",
    },
    {
      name: "--card-header",
      value: "#fff",
      text: "Changes the card's header background color in the TeamConnect UI	",
    },
    {
      name: "--card-header-text",
      value: "#001A35",
      text: "Changes the card's header text color in the TeamConnect UI	",
    },
    {
      name: "--card-body",
      value: "#fff",
      text: "Changes the card's background color in the TeamConnect UI	",
    },
    {
      name: "--card-border",
      value: "#E3E9EF",
      text: "Changes the card's border color in the TeamConnect UI	",
    },
    {
      name: "--global-nav-color",
      value: "#fff",
      text: "Changes the global navigation background color in the TeamConnect UI	",
    },
    {
      name: "--global-nav-icons",
      value: "#6B7D8F",
      text: "Changes the global navigation icons color in the TeamConnect UI	",
    },
    {
      name: "--global-nav-icons-text",
      value: "#47535F",
      text: "Changes the global navigation icons text color in the TeamConnect UI	",
    },
    {
      name: "--global-search-bar-color",
      value: "#F9FAFC",
      text: "Changes the global search bar background color in the TeamConnect UI	",
    },
    {
      name: "--global-search-bar-border",
      value: "#C7D3DF",
      text: "Changes the global search bar's border color in the TeamConnect UI",
    },
    {
      name: "--global-search-button",
      value: "#fff",
      text: "Changes the global search bar button's & dropdown's background color in the TeamConnect UI",
    },
    {
      name: "--global-search-bar-icon",
      value: "#6B7D8F",
      text: "Changes the global search bar icons's color in the TeamConnect UI	",
    },
    {
      name: "--hamburger-icon",
      value: "#fff",
      text: "Changes the hamburger icon's color in the TeamConnect UI	",
    },
    {
      name: "--top-nav-menu-border",
      value: "#C7D3DF",
      text: "Changes the top navigation bar's border color in the TeamConnect UI	",
    },
    {
      name: "--top-nav-menu",
      value: "#0067D2",
      text: "Changes the top navigation bar's background color in the TeamConnect UI	",
    },
    {
      name: "--top-nav-text",
      value: "#fff",
      text: "Changes the top navigation bar's text color in the TeamConnect UI	",
    },
    {
      name: "--top-nav-text-selected",
      value: "#fff",
      text: "Changes the top navigation bar's text color when selected in the TeamConnect UI	",
    },
    {
      name: "--top-nav-bottom-border-selected",
      value: "#fff",
      text: "Changes the top navigation bar's selected item bottom border color in the TeamConnect UI",
    },
    {
        name: "--top-nav-hover-color",
        value: "#ffffff1a",
        text: "Changes the top navigation bar's text color when hovering in the TeamConnect UI	",
      },
    {
      name: "--left-nav-border",
      value: "#C7D3DF",
      text: "Changes the left navigation bar's border color in the TeamConnect UI	",
    },
    {
      name: "--left-nav",
      value: "#fff",
      text: "Changes the left navigation bar's background color in the TeamConnect UI",
    },
    {
      name: "--left-nav-text",
      value: "#242A30",
      text: "Changes the left navigation bar's text color in the TeamConnect UI	",
    },
    {
      name: "--left-nav-text-selected",
      value: "#003368",
      text: "Changes the left navigation bar's text color when selected in the TeamConnect UI	",
    },
    {
      name: "--left-nav-selected-background",
      value: "#F2F7FD",
      text: "Changes the left navigation bar's background when selected in the TeamConnect UI	",
    },
    {
      name: "--left-nav-selected-border",
      value: "#ED5B3E",
      text: "Changes the left navigation bar's selected item's border color in the TeamConnect UI",
    },
    {
      name: "--left-nav-hovered-background",
      value: "#F2F7FD",
      text: "Changes the left navigation bar's background color when hovering in the TeamConnect UI",
    },
    {
      name: "--left-nav-hovered-border",
      value: "#ED5B3E",
      text: "Changes the left navigation bar's border color when hovering in the TeamConnect UI",
    },
    {
      name: "--left-nav-text-children",
      value: "#242A30",
      text: "",
    },
    {
      name: "--left-nav-text-children-selected",
      value: "#003368",
      text: "Changes the left navigation bar's children's text color when selected in the TeamConnect UI",
    },
    {
      name: "--left-nav-static-top-color",
      value: "#fff",
      text: "Changes the left navigation bar's background color under the manage collections icon in the TeamConnect UI",
    },
    {
      name: "--table-background-color-header",
      value: "#E3E9EF",
      text: "Changes the table's background color for header row in the TeamConnect UI",
    },
    {
      name: "--table-background-color-odd",
      value: "#fff",
      text: "Changes the table's background color for odd rows in the TeamConnect UI",
    },
    {
      name: "--table-background-color-even",
      value: "#F2F7FD",
      text: "Changes the table's background color for even rows in the TeamConnect UI",
    },
    {
      name: "--table-border-color",
      value: "#C7D3DF",
      text: "Changes the table's border color in the TeamConnect UI",
    },
    {
      name: "--table-text",
      value: "#001A35",
      text: "Changes the table's text color in the TeamConnect UI",
    },
    {
      name: "--table-header",
      value: "#001A35",
      text: "Changes the table's header text color in the TeamConnect UI",
    },
    {
      name: "--page-header-color",
      value: "#001A35",
      text: "Changes the page header text color in the TeamConnect UI",
    },
    {
      name: "--scroll-bar-color",
      value: "#E3E9EF",
      text: "Changes the scroll bar color in the TeamConnect UI",
    }
  ]

  export default styleArray;