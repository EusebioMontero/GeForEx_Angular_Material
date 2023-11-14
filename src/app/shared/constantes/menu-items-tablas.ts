interface IMenuItemTablas {
  text: string,
  route: string,
  icon: string
}

export const MenuItemTablas = {
  menuTablas: { text: "Menú", route: "/tablas-cat/menu", icon: "menu" },
  registroEntrada: { text: "Registro Entrada", route: "/tablas-cat/registro-entrada", icon: "" },
  actividades: { text: "Actividades", route: "/tablas-cat/actividades", icon: "" },
  actTipos: { text: "Tipos de Actividades", route: "/tablas-cat/actividades-tipos", icon: "" },
  actSubtipos: { text: "Subtipos de Actividades", route: "/tablas-cat/actividades-subtipos", icon: "" },
  especies: { text: "Especies", route: "/tablas-cat/especies", icon: "" },
  expEstado: { text: "Estado de Expedientes", route: "/tablas-cat/expedientes-estado", icon: "" },
  expTipo: { text: "Tipos de Expedientes", route: "/tablas-cat/expedientes-tipo", icon: "" },
  municipiosSigpac: { text: "Municipios", route: "/tablas-cat/municipios-sigpac", icon: "" },
  poblaciones: { text: "Poblaciones", route: "/tablas-cat/poblaciones", icon: "" },
  provincias: { text: "Provincias", route: "/tablas-cat/provincias", icon: "" },
  servTerritoriales: { text: "Servicios Territoriales", route: "/tablas-cat/servicios-territoriales", icon: "" },
  docTipos: { text: "Tipos de Documentos", route: "/tablas-cat/documentos-tipo", icon: "" },
  domiciliosTipos: { text: "Tipos de Domicilios", route: "/tablas-cat/domicilios-tipo", icon: "" },
  allItems,
} as const

function allItems(): IMenuItemTablas[] {
  return [
    MenuItemTablas.menuTablas,
    MenuItemTablas.registroEntrada,
    MenuItemTablas.actividades,
    MenuItemTablas.actTipos,
    MenuItemTablas.actSubtipos,
    MenuItemTablas.especies,
    MenuItemTablas.expEstado,
    MenuItemTablas.expTipo,
    MenuItemTablas.municipiosSigpac,
    MenuItemTablas.poblaciones,
    MenuItemTablas.provincias,
    MenuItemTablas.servTerritoriales,
    MenuItemTablas.docTipos,
    MenuItemTablas.domiciliosTipos
  ];
}
