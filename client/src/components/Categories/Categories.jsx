import React from 'react'
import "./Categories.scss"
import {Link} from 'react-router-dom'

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://c4.wallpaperflare.com/wallpaper/472/4/59/dpcdpc11-windows-11-minimalism-dark-mode-hd-wallpaper-preview.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Updates</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://c4.wallpaperflare.com/wallpaper/722/563/713/dpcdpc11-windows-11-minimalism-windows-logo-white-hd-wallpaper-preview.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/2">Drivers</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://wallpapercave.com/wp/wp7427797.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/3">Special</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://c4.wallpaperflare.com/wallpaper/650/710/378/windows-10-logo-minimalism-blurred-wallpaper-preview.jpg" alt="" />
                            <button>
                                <Link className="link" to="/products/4">New Virsions</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://c4.wallpaperflare.com/wallpaper/322/315/802/windows-10-red-in-4k-wallpaper-preview.jpg" alt="" />
                            <button>
                                <Link className="link" to="/products/5">Old Virsions</Link>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <img src="https://c4.wallpaperflare.com/wallpaper/159/923/683/windows-11-windows11-simple-microsoft-minimalism-hd-wallpaper-preview.jpg" alt="" />
                    <button>
                        <Link className="link" to="/products/6">Recommended</Link>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Categories