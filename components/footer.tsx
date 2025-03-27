export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold gradient-text">
              Nizam
            </a>
            <p className="text-sm text-muted-foreground mt-1">Data Specialist & Growth Marketing Expert</p>
          </div>

          <div className="text-sm text-muted-foreground">© {currentYear} Nizam. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

