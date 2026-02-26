export function BrandHeader({
  logoSrc,
  name,
  description,
}: {
  logoSrc?: string
  name?: string
  description?: string
}) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      {logoSrc ? (
        <img
          src={logoSrc || "/placeholder.svg"}
          alt={name || "Logo"}
          className="h-24 w-24 rounded-2xl object-contain md:h-28 md:w-28"
        />
      ) : (
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary md:h-28 md:w-28">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-12 w-12 text-primary-foreground"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
            />
          </svg>
        </div>
      )}
      <div>
        <h1 className="text-balance text-xl font-bold text-foreground md:text-2xl">
          {name || "Nombre de la Entidad"}
        </h1>
        <p className="mt-2 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
          {description ||
            "Informacion accesible para todos. Escucha el audio a continuacion para conocer mas detalles."}
        </p>
      </div>
    </div>
  )
}
