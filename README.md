# 🎸 Guitar Shop V02

> **Tienda online de guitarras moderna desarrollada con React, TypeScript y Vite**

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

## 🚀 Características

- **🎸 Catálogo de Guitarras**: Colección completa con 12 guitarras de famosos guitarristas
- **🛒 Carrito de Compras**: Funcionalidad completa de carrito con persistencia en LocalStorage
- **📊 Gestión de Cantidades**: Incrementar, decrementar y eliminar productos del carrito
- **💾 Persistencia de Datos**: El carrito se mantiene al recargar la página
- **💰 Cálculos Automáticos**: Total del carrito calculado dinámicamente
- **📱 Diseño Responsive**: Interfaz adaptable con Bootstrap
- **🔧 TypeScript**: Tipado estático para mayor robustez del código
- **⚡ Vite**: Build tool ultrarrápido para desarrollo
- **🎨 UI Moderna**: Diseño limpio y profesional

## 🏗️ Arquitectura del Proyecto

```
guitarShop.V02/
├── 📁 public/
│   └── 📁 img/
│       ├── carrito.png              # Icono del carrito
│       ├── logo.svg                 # Logo de GuitarLA
│       ├── header.jpg               # Imagen de encabezado
│       ├── cursos_bg.jpg           # Fondo para secciones
│       └── guitarra_01.jpg - guitarra_12.jpg  # Imágenes de guitarras
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Guitar.tsx              # Componente individual de guitarra
│   │   ├── Header.tsx              # Encabezado con logo y carrito
│   │   └── HederCart.tsx           # Modal del carrito de compras
│   ├── 📁 data/
│   │   └── db.ts                   # Base de datos estática de guitarras
│   ├── 📁 hooks/
│   │   └── useCart.ts              # Hook personalizado para el carrito
│   ├── 📁 types/
│   │   └── index.ts                # Definiciones de tipos TypeScript
│   ├── App.tsx                     # Componente principal
│   ├── main.tsx                    # Punto de entrada
│   ├── index.css                   # Estilos base
│   ├── style.css                   # Estilos personalizados
│   └── global.d.ts                 # Tipos globales
├── tsconfig.json                   # Configuración TypeScript
├── vite.config.ts                  # Configuración Vite
└── package.json                    # Dependencias y scripts
```

## 🧩 Componentes Principales

### 🎸 **Guitar**
Componente individual que muestra cada guitarra con:
- Imagen del producto
- Nombre y descripción
- Precio
- Botón "Agregar al Carrito"

### 🏠 **Header**
Encabezado de la aplicación que incluye:
- Logo de GuitarLA
- Navegación
- Carrito de compras integrado

### 🛒 **HeaderCart**
Modal del carrito de compras con:
- Lista de productos añadidos
- Controles de cantidad (+/-)
- Botón para eliminar productos
- Total del carrito
- Botón para vaciar carrito completo

### 📱 **App**
Componente raíz que:
- Orquesta todos los componentes
- Maneja el estado global del carrito
- Renderiza la colección de guitarras

## 🔧 Hook Personalizado

### 🎯 **useCart**
Hook principal que maneja toda la lógica del carrito:

#### Funcionalidades:
- **`addToCart`**: Añade guitarras al carrito (o incrementa si ya existe)
- **`increaseQuantity`**: Incrementa la cantidad de un producto
- **`decreaseQuantity`**: Decrementa la cantidad (elimina si llega a 0)
- **`removeFromCart`**: Elimina completamente un producto del carrito
- **`voidCart`**: Vacía todo el carrito
- **`isEmpty`**: Verifica si el carrito está vacío
- **`cartTotal`**: Calcula el total del carrito

#### Persistencia:
- Guarda automáticamente el carrito en `localStorage`
- Recupera el carrito al iniciar la aplicación

## 🎸 Catálogo de Guitarras

La aplicación incluye 12 guitarras de guitarristas famosos:

| ID | Nombre | Precio | Guitarrista Inspirado |
|----|--------|--------|-----------------------|
| 1 | Lukather | $299 | Steve Lukather (Toto) |
| 2 | SRV | $349 | Stevie Ray Vaughan |
| 3 | Borland | $329 | Wes Borland (Limp Bizkit) |
| 4 | VAI | $299 | Steve Vai |
| 5 | Thompson | $399 | Richard Thompson |
| 6 | White | $329 | Jack White |
| 7 | Cobain | $349 | Kurt Cobain |
| 8 | Dale | $379 | Dick Dale |
| 9 | Krieger | $289 | Robby Krieger (The Doors) |
| 10 | Campbell | $349 | Glen Campbell |
| 11 | Reed | $399 | Lou Reed |
| 12 | Hazel | $379 | Eddie Hazel |

## 🛠️ Tecnologías Utilizadas

### Frontend:
- **React 19.1.1** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript 5.8.3** - Superset tipado de JavaScript
- **Vite 7.1.2** - Build tool y dev server ultrarrápido
- **Bootstrap 5.x** - Framework CSS para diseño responsive

### Desarrollo:
- **ESLint 9.33.0** - Linter para JavaScript/TypeScript
- **TypeScript ESLint 8.39.1** - Reglas ESLint específicas para TypeScript
- **@vitejs/plugin-react-swc** - Plugin React optimizado para Vite

### Características TypeScript:
- **Tipado estricto** para todos los componentes
- **Interfaces personalizadas** para guitarras y carrito
- **Type safety** en todas las operaciones

## 📋 Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** (generalmente viene con Node.js)
- **Git** (para clonar el repositorio)

## ⚙️ Instalación y Configuración

### 1️⃣ **Clonar el Repositorio**

```bash
git clone https://github.com/Eduardo-VaZu/guitarShop.V02.git
cd guitarShop.V02
```

### 2️⃣ **Instalar Dependencias**

```bash
npm install
```

Esto instalará todas las dependencias necesarias incluyendo:
- React y React-DOM
- TypeScript y tipos
- Vite y plugins
- ESLint y herramientas de desarrollo

### 3️⃣ **Ejecutar en Modo Desarrollo**

```bash
npm run dev
```

✅ La aplicación estará disponible en: `http://localhost:5173`

### 4️⃣ **Construir para Producción**

```bash
npm run build
```

Esto compilará TypeScript y construirá la aplicación optimizada.

### 5️⃣ **Vista Previa de Producción**

```bash
npm run preview
```

### 6️⃣ **Ejecutar Linting**

```bash
npm run lint
```

## 📱 Uso de la Aplicación

### 🛒 **Agregar Productos al Carrito**
1. Navega por la colección de guitarras
2. Haz clic en "Agregar al Carrito" en la guitarra deseada
3. El producto se añadirá al carrito (o se incrementará si ya existe)

### 📊 **Gestionar el Carrito**
1. Haz clic en el icono del carrito en el header
2. En el modal del carrito puedes:
   - **Ver todos los productos** añadidos
   - **Incrementar cantidad** con el botón `+`
   - **Decrementar cantidad** con el botón `-`
   - **Eliminar producto** con el botón `X`
   - **Ver el total** actualizado automáticamente
   - **Vaciar carrito completo** con "Vaciar Carrito"

### 💾 **Persistencia**
- El carrito se guarda automáticamente en tu navegador
- Los productos permanecen al recargar la página
- Los datos se mantienen entre sesiones

## 🧪 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con hot reload |
| `npm run build` | Compila TypeScript y construye para producción |
| `npm run preview` | Vista previa de la build de producción |
| `npm run lint` | Ejecuta ESLint para encontrar errores de código |

## 📁 Estructura de Tipos

### 🎸 **TGuitar**
```typescript
type TGuitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}
```

### 🛒 **TCartItem**
```typescript
type TCartItem = Pick<TGuitar, 'id' | 'name' | 'image' | 'price'> & {
  quantity: number;
}
```

### 🔧 **THeaderCartProps**
```typescript
type THeaderCartProps = {
  cart: TCartItem[];
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  voidCart: () => void;
  isEmpty: boolean;
  cartTotal: number;
}
```

## 🎨 Personalización

### 🎸 **Agregar Nuevas Guitarras**
Modifica `src/data/db.ts` para añadir nuevos productos:

```typescript
const newGuitar: TGuitar = {
  id: 13,
  name: 'Nueva Guitarra',
  image: 'guitarra_13',
  description: 'Descripción de la nueva guitarra',
  price: 459
};
```

### 🎨 **Personalizar Estilos**
- Modifica `src/style.css` para estilos personalizados
- Utiliza clases de Bootstrap para diseño responsive
- Ajusta `src/index.css` para estilos globales

### 🌈 **Cambiar Tema**
Personaliza colores y tipografías en los archivos CSS.

## 🚀 Funcionalidades Futuras

- [ ] 🔐 **Sistema de autenticación** de usuarios
- [ ] 📧 **Integración con email** para confirmaciones
- [ ] 💳 **Pasarelas de pago** (Stripe, PayPal)
- [ ] 📊 **Dashboard de administración** 
- [ ] 🔍 **Sistema de búsqueda** y filtros
- [ ] ⭐ **Sistema de reseñas** y calificaciones
- [ ] 📱 **Aplicación móvil** nativa
- [ ] 🌍 **Internacionalización** (i18n)
- [ ] 📦 **Gestión de inventario** en tiempo real
- [ ] 🔔 **Notificaciones push** 
- [ ] 📈 **Analytics** de ventas
- [ ] 🎯 **Recomendaciones** personalizadas

## 🐛 Solución de Problemas

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Errores de TypeScript
```bash
# Verificar tipos
npm run build

# Ejecutar linting
npm run lint
```

### Puerto ocupado
Cambia el puerto en `vite.config.ts` o mata el proceso:
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Linux/macOS
lsof -ti:5173 | xargs kill -9
```

### Problemas con imágenes
- Verifica que las imágenes estén en `public/img/`
- Asegúrate que los nombres coincidan con la base de datos
- Formato: `guitarra_XX.jpg`

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### 📝 Guías de Contribución
- Mantén el tipado TypeScript estricto
- Sigue las convenciones de nomenclatura existentes
- Añade tipos para nuevas funcionalidades
- Documenta cambios importantes

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Eduardo Vázquez**
- GitHub: [@Eduardo-VaZu](https://github.com/Eduardo-VaZu)

## 🙏 Agradecimientos

- **React Team** por la excelente biblioteca
- **Microsoft** por TypeScript
- **Vite Team** por el increíble rendimiento
- **Bootstrap** por el framework CSS
- **Comunidad Open Source** por herramientas y recursos
- **Los guitarristas legendarios** que inspiraron el catálogo

## 📸 Capturas de Pantalla

### 🏠 Página Principal
*Catálogo completo de guitarras con diseño responsive*

### 🛒 Carrito de Compras
*Modal interactivo con gestión completa de productos*

### 📱 Versión Móvil
*Diseño optimizado para dispositivos móviles*

---

⭐ **¡No olvides dar una estrella al proyecto si te gustó!** ⭐

🎸 **¡Disfruta comprando guitarras!** 🎸

