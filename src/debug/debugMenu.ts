import { MenuOptions } from '../constants/menuOptions';
import { State } from '../states/rootState';
import { RenderingUtilities } from '../utilites/renderingUtilities';
import { DebugMode } from './debugMode';

export class DebugMenu {

    static addMenuButton() {
        const menuBtn = RenderingUtilities.nodeBuilder('button', 'Debug', ['button', 'menuBtn']);
        menuBtn.addEventListener('click', () => this.toggleMenu());
        RenderingUtilities.appendNodeToBody(menuBtn);
    }

    static removeMenuButton() {
        const menuBtn = document.querySelector('.menuBtn');
        menuBtn.remove();
    }

    static activateMenuButton() {
        const btn = document.querySelector('.menuBtn');
        btn.classList.add('active');
    }

    static deactivateMenuButton() {
        const btn = document.querySelector('.menuBtn');
        btn.classList.remove('active');
    }

    static toggleMenu() {
        if (State.debugState.menuOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    static openMenu() {
        DebugMode.resetState();
        State.debugState.menuOpen = true;
        this.activateMenuButton();
        const menu = RenderingUtilities.nodeBuilder('content', '<h1 class="title">Debug Menu</h1>', ['menu']);
        this.addMenuOptions(menu);
        RenderingUtilities.appendNodeToBody(menu);
        this.addSaveButton();
    }

    static closeMenu() {
        if (State.debugState.menuOpen) {
            State.debugState.menuOpen = false;
            this.deactivateMenuButton();
            const menu = document.querySelector('.menu');
            menu.remove();


            const saveBtn = document.querySelector('.saveBtn');
            saveBtn.remove();
        }
    }

    static addSaveButton() {
        const saveBtn = document.createElement('button');
        saveBtn.classList.add('button', 'saveBtn');
        saveBtn.innerHTML = 'Save';
        saveBtn.addEventListener('click', () => this.saveMenuOptions());
        const body = document.querySelector('body');
        body.appendChild(saveBtn);
    }

    static saveMenuOptions() {
        const menuOptionsJson = JSON.stringify(State.debugState.menuOptions);
        localStorage.setItem('menuOptions', menuOptionsJson);
    }

    static removeSaveButton() {
        const saveBtn = document.querySelector('.saveBtn');
        saveBtn.remove();
    }

    static addMenuOptions(menu: HTMLElement): void {
        this.addMenuOption(menu, MenuOptions.GRID);
        this.addMenuOption(menu, MenuOptions.COORDINATES);
        this.addMenuOption(menu, MenuOptions.HITBOX);
        this.addMenuOption(menu, MenuOptions.DETECTION_BOX);
        this.addMenuOption(menu, MenuOptions.DETECTED_TILES);
        this.addMenuOption(menu, MenuOptions.COLLISION_TILES);
        this.addMenuOption(menu, MenuOptions.SCREEN_EDGE);
    }

    static addMenuOption(menu: HTMLElement, name: string): HTMLElement {
        const wrapper = this.addWrapper(name);
        const checkBox = this.addEnabledCheckBox(name);
        const colorInput = this.addColorInput(name);
        const lineWidthRange = this.addLineWidthRange(name);
        wrapper.appendChild(checkBox);
        wrapper.appendChild(colorInput);
        if (lineWidthRange) { wrapper.appendChild(lineWidthRange); }
        menu.appendChild(wrapper);

        return menu;
    }

    static addWrapper(name: string): HTMLElement {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        const title = document.createElement('h3');
        title.innerText = name;
        wrapper.appendChild(title);

        return wrapper;
    }

    static addEnabledCheckBox(name: string): HTMLElement {
        const label = RenderingUtilities.nodeBuilder('label', 'Enabled');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = State.debugState.menuOptions[name].enabled;

        checkbox.addEventListener('change', () => {
            State.debugState.menuOptions[name].enabled = checkbox.checked;
        });

        label.appendChild(checkbox);

        return label;
    }

    static addColorInput(name: string): HTMLElement {
        const label = RenderingUtilities.nodeBuilder('label', 'Color');
        const input = document.createElement('input');
        input.type = 'text';
        input.value = State.debugState.menuOptions[name].color;

        input.addEventListener('keyup', () => {
            State.debugState.menuOptions[name].color = input.value;
        });

        label.appendChild(input);

        return label;
    }

    static addLineWidthRange(name: string): HTMLElement {
        if (State.debugState.menuOptions[name].lineWidth) {
            const label = RenderingUtilities.nodeBuilder('label', 'Line Width');
            const input = document.createElement('input');
            input.type = 'range';
            input.min = '1';
            input.max = '10';
            input.value = State.debugState.menuOptions[name].lineWidth + '';

            input.addEventListener('change', () => {
                State.debugState.menuOptions[name].lineWidth = Number(input.value);
                console.log('testing');
            });

            label.appendChild(input);

            return label;
        }

        return null;
    }

    static cleanup() {
        this.removeMenuButton();
        if (State.debugState.menuOpen) { this.closeMenu(); }
    }
}
