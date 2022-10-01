export class GamesPage {

    navigate = () => cy.visit('https://www.hub88.io/games')

    getSearchField = () => cy.get('input[placeholder="Search"]')
    typeSearchQuery = (searchRequest) => {
        this.getSearchField().type(searchRequest, {delay: 100})
    }

    clearSearchField = () => this.getSearchField().clear()

    getFilterButton = () => cy.get("form[class*=search-form]").contains("Filter")
    openDropdown = () => {
        this.getFilterButton().click()
    }

    clickFilterItem = (item) => cy.get("div[class*=dropdown]").contains(item).click()

    getSearchResults = () => cy.get("a[class*=item]")

    getEmptySearchPlaceholder = () => cy.get("div[class*=empty-search]")

    closeFilter = () => this.getSearchField().click()
}

