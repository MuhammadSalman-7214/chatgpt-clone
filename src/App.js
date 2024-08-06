// import React, { useState } from 'react';
// import { Button, Layout } from 'antd';
// import { Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Home from './pages/Home';
// const { Header, Sider, Content } = Layout;

// const App = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [activePage, setActivePage] = useState('chatGPT');

//   const colorBgContainer = 'bg-white'; 

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Layout className="flex-1 flex">
//         {!collapsed && (
//           <Sider
//             trigger={null}
//             collapsible
//             collapsed={collapsed}
//             className={`h-screen overflow-auto ${collapsed ? 'w-20' : 'w-32'} bg-slate-100 transition-all duration-200 transition delay-700 duration-300 ease-in-out`}
//             width={collapsed ? 80 : 255}
//           >
//             <Sidebar setActivePage={setActivePage} activePage={activePage} setCollapsed={setCollapsed} collapsed={collapsed} />
//           </Sider>
//         )}
//         <Layout className={`transition-all duration-200 flex-1 ${colorBgContainer} ${collapsed ? 'ml-0' : 'ml-0'}`}>
//           <Header className={`p-0 ${colorBgContainer}`}>
//             <div className="flex justify-between px-1">
//               {collapsed ? (
//                 <div className="flex justify-between px-2 w-full">
//                   <div className="">
//                   <i className="fa-solid fa-table-columns p-2 text-slate-500 hoverTab rounded-lg text-lg" onClick={() => setCollapsed(!collapsed)}></i>
//                   <i className="fa-solid fa-pen-to-square p-2 text-slate-500 hoverTab rounded-lg text-lg"></i>
//                   </div>
//                   <div className="text-slate-500 hoverTab1 rounded-lg px-1 pt-5 text-lg">ChatGPT <i className="fa-solid fa-angle-down text-slate-400"></i></div>

//                   <div className=''>
//                     <i className="fa-solid fa-arrow-up-from-bracket p-2 hoverTab1 rounded text-xl text-slate-500"></i>
//                     <i className="fa-solid fa-circle-user mx-2 text-3xl text-slate-500"></i>
//                   </div>
                  
//                 </div>
//               ) : (
//                 <div className="flex justify-between px-2 w-full">
//                   <div className="text-slate-500 hoverTab1 rounded-lg px-1">ChatGPT <i className="fa-solid fa-angle-down text-slate-400"></i>
//                   </div>
                  
//                   <div className=''>
//                     <i className="fa-solid fa-arrow-up-from-bracket p-2 hoverTab1 rounded text-xl text-slate-500"></i>
//                     <i className="fa-solid fa-circle-user mx-2 text-3xl text-slate-500"></i>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </Header>
//           <Content className={`p-5 ${colorBgContainer}`}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//             </Routes>
//           </Content>
//         </Layout>
//       </Layout>
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { Button, Layout, Drawer } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import { useMediaQuery } from 'react-responsive';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [activePage, setActivePage] = useState('chatGPT');
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });
  const colorBgContainer = 'bg-white';

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Layout className="flex-1 flex">
        {isSmallScreen ? (
          <Drawer
            placement="left"
            closable={false}
            onClose={toggleDrawer}
            visible={drawerVisible}
            bodyStyle={{ padding: 0 }}
            width={255}
          >
            <Sidebar setActivePage={setActivePage} activePage={activePage} setCollapsed={setDrawerVisible} collapsed={collapsed} />
          </Drawer>
        ) : (
          !collapsed && (
            <Sider
              trigger={null}
              collapsible
              collapsed={collapsed}
              className={`h-screen overflow-auto bg-slate-100 transition-all duration-200 ease-in-out`}
              width={255}
            >
              <Sidebar setActivePage={setActivePage} activePage={activePage} setCollapsed={setCollapsed} collapsed={collapsed} />
            </Sider>
          )
        )}
        <Layout className={`transition-all duration-200 flex-1 ${colorBgContainer}`}>
          <Header className={`p-0 ${colorBgContainer}`}>
            <div className="flex justify-between px-1">
              {collapsed ? (
                <div className="flex justify-between px-2 w-full">
                  <div className="">
                    <i className="fa-solid fa-table-columns p-2 text-slate-500 hoverTab rounded-lg text-lg" onClick={toggleSidebar}></i>
                    <i className="fa-solid fa-pen-to-square p-2 text-slate-500 hoverTab rounded-lg text-lg"></i>
                  </div>
                  <div className="text-slate-500 hoverTab1 rounded-lg px-1 pt-5 text-lg">
                    ChatGPT <i className="fa-solid fa-angle-down text-slate-400"></i>
                  </div>
                  <div className="">
                    <i className="fa-solid fa-arrow-up-from-bracket p-2 hoverTab1 rounded text-xl text-slate-500"></i>
                    <i className="fa-solid fa-circle-user mx-2 text-3xl text-slate-500"></i>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between px-2 w-full">
                  <div className="text-slate-500 hoverTab1 rounded-lg px-1">
                    ChatGPT <i className="fa-solid fa-angle-down text-slate-400"></i>
                  </div>
                  <div className="">
                    <i className="fa-solid fa-arrow-up-from-bracket p-2 hoverTab1 rounded text-xl text-slate-500"></i>
                    <i className="fa-solid fa-circle-user mx-2 text-3xl text-slate-500"></i>
                  </div>
                </div>
              )}
            </div>
          </Header>
          <Content className={`p-5 ${colorBgContainer}`}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
      {isSmallScreen && (
        <Button
          className="fixed top-4 left-5"
          icon={<i className="fa-solid fa-table-columns p-2 text-slate-500 hoverTab rounded-lg text-lg"></i>}
          onClick={toggleDrawer}
          style={{textDecoration:'none', border:'0'}}
        />
      )}
    </div>
  );
};

export default App;
