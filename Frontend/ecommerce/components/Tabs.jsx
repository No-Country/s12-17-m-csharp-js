import { useState, useContext, createContext } from "react";

const TabContext = createContext({
  activeTab: "",
  setActiveTab: (value) => {},
});

const Tabs = ({ children, ...props }) => {
  // Ensure children is always an array
  if (!Array.isArray(children)) {
    children = [children];
  }

  const [activeTab, setActiveTab] = useState(children[0].props.title);
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <div
        {...props}
        className="mt-10 border-2 p-4 px-8 shadow-sm shadow-black"
      >
        <nav>
          <ul className="mt-8 flex space-x-12 text-2xl font-semibold">
            {children.map((child) => (
              <li key={child.props.title}>{child}</li>
            ))}
          </ul>
        </nav>
        <hr className="mt-2 border-gray-300 dark:border-gray-700" />
        <div className="my-4 text-lg">
          {children.map(
            (child) => child.props.title === activeTab && child.props.children
          )}
        </div>
      </div>
    </TabContext.Provider>
  );
};

const TabContent = ({ title, children }) => {
  const { activeTab, setActiveTab } = useContext(TabContext);
  return (
    <button
      className={`underline underline-offset-4 hover:scale-105 hover:transition-transform ${
        activeTab === title ? "decoration-primary" : "decoration-white"
      }`}
      onClick={() => setActiveTab(title)}
    >
      {title}
    </button>
  );
};

Tabs.Content = TabContent;

export default Tabs;
