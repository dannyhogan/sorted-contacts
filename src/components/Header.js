import Component from './Component.js';

class Header extends Component {
    render() {
        const dom = this.renderDOM();

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <header>
                <h1>Contact List</h1>
            </header>
        `;
    }
}

export default Header;