import { useContext, createContext, useState } from "react";

const StateContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false
}

export const ContextProvider = ({ children }) => {
	const [currentColor, setCurrentColor] = useState('#03C9D7');
	const [activeMenu, setActiveMenu] = useState(true);
	const [currentMode, setCurrentMode] = useState(true);
	const [screenSize, setScreenSize] = useState(true);
	const [isClicked, setIsClicked] = useState(true);
	const [themeSettings, setThemeSettings] = useState(true);

	const setMode = (e) => {
		setCurrentMode(e.target.value);
		localStorage.setItem('themeMode', e.target.value);
	};

	const setColor = (color) => {
		setCurrentColor(color);
		localStorage.setItem('colorMode', color);
	};

	const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
			{children}
		</StateContext.Provider>
	);
}

export const useStateContext = () => useContext(StateContext);