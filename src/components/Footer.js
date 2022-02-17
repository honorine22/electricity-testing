function Footer() {
    const date = new Date().getFullYear()
    return (
        <div class="container mx-auto px-6">
            <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                <div class="sm:w-2/3 text-sm text-center py-6">
                    <p class="text-sm text-blue-900 font-bold mb-2">
                        Copyright © {{ date }}. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;