function Footer() {
    const invalidChildrenToRenderDirectly = {
        date: new Date().getFullYear(),
    }
    return (
        <div className="fixed bottom-0 border-t-2 border-gray-300 w-full mx-auto px-6">
            <div className="flex flex-col items-center">
                <div className="sm:w-2/3 text-sm text-center py-4">
                    <p className="text-sm text-blue-900 font-bold">
                        Copyright ©. {invalidChildrenToRenderDirectly.date} All
                        rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;