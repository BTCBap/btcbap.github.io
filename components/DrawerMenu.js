export default function DrawerMenu() {
  return (
    <div className="drawer z-40">
      <input id="main-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="main-drawer" className="btn btn-ghost fixed top-4 right-4">
          <i className="fas fa-bars"></i>
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="main-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-100 text-base-content">
          <li><a href="/about">About</a></li>
          <li><a href="https://denverbitdevs.com">Denver BitDevs</a></li>
          <li><a href="https://denver.space">The Space</a></li>
          <li><a href="/book">Book</a></li>
          <li><a href="https://valuestack.xyz">Podcast</a></li>
          <li><a href="https://t.me/btcbap">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}
