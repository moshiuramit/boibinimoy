import StoreProvider from "../provider"
import Sidebar from "../ui/sidebar/Sidebar"
export const metadata = {
  title: 'Boi Binimoy - Buy or Rent Books',
  description: 'Rent and Sell knowledge',
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen">
        <Sidebar />
        <div className="flex flex-wrap p-2 justify-center">
          { children }
        </div>
      </div>
    </StoreProvider>
  )
}
