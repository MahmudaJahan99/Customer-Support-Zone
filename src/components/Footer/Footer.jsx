const Footer = () => {
    return (
        <div>
            <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <aside className="">
                    <p>
                        <a href="#" className="text-xl font-bold">CS — Ticket System</a>
                    </p>
                    <p>Streamlining customer support with fast, <br />reliable, and organized ticket management — <br />
                        because every request deserves attention.</p>
                </aside>

                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover flex items-center gap-2">
                        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-xs">
                            <i className="fa-brands fa-x-twitter"></i>
                        </div>
                        @CS — Ticket System
                    </a>

                    <a className="link link-hover flex items-center gap-2">
                        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-xs">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </div>
                        @CS — Ticket System
                    </a>
                    <a className="link link-hover flex items-center gap-2">
                        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-xs">
                            <i className="fa-brands fa-facebook-f"></i>
                        </div>
                        @CS — Ticket System
                    </a>
                    <a className="link link-hover flex items-center gap-2">
                        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-xs">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        support@csts.com
                    </a>
                </nav>
            </div>
            <div className="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content p-4 border-t border-gray-700">
                <aside>
                    <p>© {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;