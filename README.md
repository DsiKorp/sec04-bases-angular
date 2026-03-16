# Sec04 - Bases de Angular con Signals

Proyecto del curso **Angular: De cero a experto** (Sección 4). Aplicación construida con **Angular 21** que demuestra los fundamentos del framework utilizando **signals** como mecanismo principal de reactividad.

## Características principales

- **Signals** (`signal`, `computed`, `effect`) para manejo de estado reactivo
- **Standalone components** (estándar en Angular v20+)
- **Routing** con `HashLocationStrategy` y navegación entre páginas
- **Servicios inyectables** con `inject()` y `providedIn: 'root'`
- **Inputs y outputs funcionales** (`input()`, `output()`) en lugar de decoradores
- **Persistencia** de datos en `localStorage` usando `effect()`
- **Control flow nativo** (`@if`, `@for`) en templates

## Páginas

### Counter Page (`/`)

Demuestra la diferencia entre una propiedad convencional y un `signal`:

```typescript
counter = 0;                // propiedad clásica
counterSignal = signal(0);  // signal reactivo
```

Incluye botones para incrementar, decrementar y resetear. Un `setInterval` actualiza ambos valores para evidenciar el contraste en la detección de cambios.

### Hero Page (`/hero`)

Uso de `signal` y `computed` para derivar estado:

```typescript
name = signal('Ironman');
age = signal(45);
heroDescription = computed(() => `${this.name()} - ${this.age()} años`);
capitalizedName = computed(() => this.name().toUpperCase());
```

Los `computed` se recalculan automáticamente al cambiar los signals de los que dependen.

### Dragon Ball Page (`/dragonball`)

CRUD básico de personajes con signals. Los personajes se almacenan en un `signal<Character[]>` local y se renderizan con `@for` y `@if`:

```typescript
characters = signal<Character[]>([
  { id: 1, name: 'Goku', power: 9000 },
]);
```

Usa class bindings (`[class.text-danger]`, `[class.text-primary]`) para estilizar según el nivel de poder.

### Dragon Ball Super Page (`/dragonball-super`)

Evolución de la página anterior aplicando mejores prácticas:

- **Servicio compartido** (`DragonballService`) inyectado con `inject()`
- **Componentes reutilizables**: `CharacterList` y `DragonballCharacterAdd`
- **Comunicación padre-hijo** con `input()` / `output()`
- **Persistencia automática** en `localStorage` mediante `effect()` en el servicio

```typescript
// dragonball.service.ts
characters = signal<Character[]>(loadFromLocalStorage());

saveToLocalStorage = effect(() => {
  localStorage.setItem('dragonball_characters', JSON.stringify(this.characters()));
});
```

## Estructura del proyecto

```
src/app/
├── interfaces/          # Character (id, name, power)
├── services/            # DragonballService - gestión de personajes con signals
├── components/
│   ├── shared/navbar/   # Barra de navegación con RouterLink
│   └── dragonball/
│       ├── character-list/           # Lista reutilizable (input signals)
│       └── dragonball-character-add/ # Formulario de alta (output signal)
└── pages/
    ├── counter/           # Comparación signal vs propiedad clásica
    ├── hero/              # computed() y signal()
    ├── dragonball/        # CRUD local con signals
    └── dragonball-super/  # CRUD con servicio, componentes y localStorage
```

## Conceptos de Signals demostrados

| API | Uso en el proyecto |
|---|---|
| `signal()` | Estado local en componentes y servicios |
| `computed()` | Estado derivado (`heroDescription`, `capitalizedName`, `powerClasses`) |
| `effect()` | Efecto secundario: guardar en `localStorage` al cambiar `characters` |
| `signal.set()` | Reemplazo directo del valor |
| `signal.update()` | Actualización basada en el valor anterior |
| `input()` | Props de entrada en componentes hijos (`CharacterList`) |
| `output()` | Emisión de eventos hacia el padre (`DragonballCharacterAdd`) |

## Requisitos

- Node.js 20+
- Angular CLI 21+

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4200)
ng serve

# Build de producción
ng build

# Tests
ng test
```
