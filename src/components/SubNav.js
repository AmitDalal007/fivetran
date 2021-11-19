import React from 'react'

const SubNav = () => {
    return (
        <>
            <div id="uf-top-nav-container" className="uf-top-nav-container container-fluid">
                <div className="container">
                    <nav id="uf-hub-nav" className="navbar" aria-label="Sitewide menu" role="navigation">
                        {/* <div className="navbar-brand uf-menu-background">
                            <button type="button" aria-expanded="false" aria-haspopup="true" aria-controls="uf-navbar-menu" className="navbar-burger navbar-start">
                                <span aria-hidden="true" className="hamburger-bar"></span>
                                <span aria-hidden="true" className="hamburger-bar"></span>
                                <span aria-hidden="true" className="hamburger-bar"></span>
                                <span className="sr-only">Toggle menubar</span>
                                <i aria-hidden="true" className="uf-exit-icon fas fa-times uf-menu-color"></i>
                            </button>

                            <p className="mobile-menu-title">
                                Resources for Analytics Teams
                            </p>
                        </div> */}

                        <ul id="uf-navbar-menu" className="navbar-menu is-vcentered" role="menubar">
                            <li role="presentation" className="navbar-item uf-menu-parent-list-item section has-dropdown is-hoverable dropdown uf-selected">
                                <button type="button" className="navbar-dropdown-toggle is-focusable has-toggle-label dropbtn" aria-haspopup="true" aria-expanded="false" aria-controls="uf-dropdown-1">
                                    <span className="uf-dropdown-inset-label inline uf-menu-item">
                                        <span className="sr-only">Toggle submenu for:</span> Topic
                                    </span>
                                    <i className="bi bi-chevron-down _snarr"></i>
                                </button>
                                <ul id="uf-dropdown-1" className="uf-menu-submenu navbar-dropdown dropdown-content" role="menu" aria-label="Topic">
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/automated-data-integration" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Automated Data Integration
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/data-academy" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Data Academy
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/modern-data-stack" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Modern Data Stack
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  uf-selected uf-selected-child">
                                        <a role="menuitem" href="https://resources.fivetran.com/build-vs-buy" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream" aria-current="page">
                                            Build vs. Buy
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/transformations" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Transformations
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li role="presentation" className="navbar-item uf-menu-parent-list-item section has-dropdown is-hoverable dropdown">
                                <button type="button" className="navbar-dropdown-toggle is-focusable has-toggle-label dropbtn" aria-haspopup="true" aria-expanded="false" aria-controls="uf-dropdown-2">

                                    <span className="uf-dropdown-inset-label inline uf-menu-item">
                                        <span className="sr-only">Toggle submenu for:</span> Solution
                                    </span>

                                    <i className="bi bi-chevron-down _snarr"></i>
                                </button>

                                <ul id="uf-dropdown-2" className="uf-menu-submenu navbar-dropdown dropdown-content" role="menu" aria-label="Solution">
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/database-solutions" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Database Analytics
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/marketing-analytics" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Marketing Analytics
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/finance-analytics" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Finance Analytics
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/sales-analytics" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Sales Analytics
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/powered-by-fivetran" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Powered by Fivetran
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li role="presentation" className="navbar-item uf-menu-parent-list-item Industry section has-dropdown is-hoverable dropdown">
                                <button type="button" className="navbar-dropdown-toggle is-focusable has-toggle-label dropbtn" aria-haspopup="true" aria-expanded="false" aria-controls="uf-dropdown-3">

                                    <span className="uf-dropdown-inset-label inline uf-menu-item">
                                        <span className="sr-only">Toggle submenu for:</span> Industry
                                    </span>

                                    <i className="bi bi-chevron-down _snarr"></i>
                                </button>

                                <ul id="uf-dropdown-3" className="uf-menu-submenu navbar-dropdown dropdown-content" role="menu" aria-label="Industry">
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/b2c-companies" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            B2C
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/b2b-technology" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            B2B
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/agency" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Agencies
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/it-engineering" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            IT/Engineering
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/media" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Media
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/retail" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Retail
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li role="presentation" className="navbar-item uf-menu-parent-list-item section has-dropdown is-hoverable dropdown">
                                <button type="button" className="navbar-dropdown-toggle is-focusable has-toggle-label dropbtn" aria-haspopup="true" aria-expanded="false" aria-controls="uf-dropdown-4">

                                    <span className="uf-dropdown-inset-label inline uf-menu-item">
                                        <span className="sr-only">Toggle submenu for:</span> Partner
                                    </span>

                                    <i className="bi bi-chevron-down _snarr"></i>
                                </button>

                                <ul id="uf-dropdown-4" className="uf-menu-submenu navbar-dropdown dropdown-content" role="menu" aria-label="Partner">
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/aws" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            AWS
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/fivetran-databricks" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Databricks
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/dbt" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            dbt
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/gcp" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            GCP
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/looker" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Looker
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/snowflake" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Snowflake
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/automated-data-integration-for-tableau" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Tableau
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li role="presentation" className="navbar-item uf-menu-parent-list-item section has-dropdown is-hoverable dropdown">
                                <button type="button" className="navbar-dropdown-toggle is-focusable has-toggle-label dropbtn" aria-haspopup="true" aria-expanded="false" aria-controls="uf-dropdown-5">

                                    <span className="uf-dropdown-inset-label inline uf-menu-item">
                                        <span className="sr-only">Toggle submenu for:</span> Resource Type
                                    </span>
                                    <i className="bi bi-chevron-down _snarr"></i>
                                </button>
                                <ul id="uf-dropdown-5" className="uf-menu-submenu navbar-dropdown dropdown-content" role="menu" aria-label="Resource Type">
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/all-blog-posts" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Blog Posts
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/case-studies" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Case Studies
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/ebooks" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Ebooks
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/press-releases" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Press Releases
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/on-demand-webinars" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            On-Demand Webinars
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/connector-cheat-sheets" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Connector Cheat Sheets
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/datasheets" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Datasheets
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li role="presentation" className="navbar-item uf-menu-parent-list-item section has-dropdown is-hoverable dropdown">
                                <button type="button" className="navbar-dropdown-toggle is-focusable has-toggle-label dropbtn" aria-haspopup="true" aria-expanded="false" aria-controls="uf-dropdown-6">

                                    <span className="uf-dropdown-inset-label inline uf-menu-item">
                                        <span className="sr-only">Toggle submenu for:</span> Translated Content
                                    </span>

                                    <i className="bi bi-chevron-down _snarr"></i>
                                </button>

                                <ul id="uf-dropdown-6" className="uf-menu-submenu navbar-dropdown dropdown-content" role="menu" aria-label="Translated Content">
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/contenu-en-français" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Contenu en Français
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/inhalt-in-deutsch" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Inhalt auf Deutsch
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/contenido-en-español" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Contenido en Español
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/japanese" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            日本のコンテンツ
                                        </a>
                                    </li>
                                </ul>

                            </li>
                            <li role="presentation" className="navbar-item uf-menu-parent-list-item section has-dropdown is-hoverable dropdown">
                                <button type="button" className="navbar-dropdown-toggle is-focusable dropbtn" aria-haspopup="true" aria-expanded="false" aria-controls="uf-dropdown-7">
                                    <span className="uf-dropdown-inset-label inline uf-menu-item undrlin">
                                        <span className="sr-only">Toggle submenu for: </span> Modern Data Stack Conference
                                    </span>
                                    <i className="bi bi-chevron-down _snarr"></i>
                                </button>

                                <ul id="uf-dropdown-7" className="uf-menu-submenu navbar-dropdown dropdown-content" role="menu" aria-label="Modern Data Stack Conference">
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/mdsconference-keynotes" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Keynotes
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/data-engineer-architect" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Data Engineer/Architect
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/data-analyst" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Data Analyst
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/product-manager-business-lead" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Product Manager
                                        </a>
                                    </li>
                                    <li role="presentation" className="uf-menu-submenu-list-item  ">
                                        <a role="menuitem" href="https://resources.fivetran.com/team-lead" className="uf-dropdown-link uf-dropdown-child uf-menu-item is-focusable hooked _unitxt" data-internal="stream">
                                            Team Lead
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>


                    {/* <div className="uf-search-share-container">
                        <div id="uf-search-container" className="uf-search-container dropdown is-right">
                            <div className="uf-dropdown-trigger">
                                <button type="button" id="uf-search-open" className="uf-button uf-search-open" aria-controls="uf-search-dropdown-menu" aria-expanded="false" aria-haspopup="true" title="Open Search Box">
                                    <i className="fas fa-search" aria-hidden="true"></i>
                                    <span className="sr-only">Open search box</span>
                                </button>
                            </div>
                            <div id="uf-search-dropdown-menu" className="uf-search-dropdown-menu" role="dialog">
                                <form id="uf-search-form" className="uf-search-form" role="search" aria-label="Sitewide" action="https://resources.fivetran.com/search" __bizdiag="-847675390" __biza="WJ__">
                                    <input type="search" name="ufq" id="uf-search-input" className="uf-search-input uf-input" placeholder="Search" aria-label="Search" />
                                    <input type="hidden" name="ufs" value="7263074" />
                                    <button type="submit" id="uf-search-submit" className="uf-search-submit" title="Search sitewide">
                                        <i className="fas fa-search" aria-hidden="true"></i>
                                        <span className="sr-only">Search sitewide</span>
                                    </button>
                                    <button type="button" id="uf-search-close" className="uf-search-close" title="Close Search Box">
                                        <i className="fas fa-times" aria-hidden="true"></i>
                                        <span className="sr-only">Close search box</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div> */}


                </div>
            </div>
        </>
    )
}

export default SubNav
