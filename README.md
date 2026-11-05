# NEXUS-Work | Plataforma de Red Social para Profesionales (Networking)
Proyecto Académico de Interacción Humano-Computador (IHC) - Universidad Privada del Norte (UPN)

## Estructura del Proyecto Front-End (Semana 5 y 6):

1. **index.html / nexus_work_landing_page.html**:
   - Portada oficial y Landing Page informativa.
   - Navegación hacia Registro, Beneficios, Empleos y Eventos.
   - Acceso al módulo de Onboarding y Dashboard.

2. **nexus_work_onboarding_registro.html**:
   - Flujo de creación de cuenta y onboarding conversacional de 3 pasos (User Persona: Carlos Mendoza).
   - Conexión directa al completar el registro hacia el Dashboard principal.

3. **nexus_work_dashboard_app.html**:
   - Panel principal del usuario profesional (Feed dinámico, Bolsa de empleo con postulación en 1 clic).
   - Acreditación con código QR generado en tiempo real y sincronización de calendario.
   - Mensajería síncrona con control diario de cuota anti-spam (RN-04).
   - Web Analytics interactivo implementado con **Chart.js** sobre Canvas.
   - Accesibilidad universal (WCAG 2.1 AA): barra con escalado de fuentes (A+, A, A-) y switch de Alto Contraste.

4. **nexus_work_admin_bi_dashboard.html**:
   - Consola de superadministración y Business Intelligence (BI).
   - Gráfico de curva de retención (mitigación de abandono según Ishikawa) con **Chart.js**.
   - Gráfico de barras horizontales de demanda laboral por especialidades con **Chart.js**.
   - Bandeja de validación de identidad con comprobación documental (RN-01).
   - Cola de moderación contra contenido fraudulento/spam (RN-07, RN-08).
   - Simulador en tiempo real de validación de pases QR en puerta para eventos (RF-05, RN-06).

## Tecnologías Utilizadas:
- HTML5 Semántico
- Tailwind CSS CDN
- FontAwesome 6 Icons
- Google Fonts (Plus Jakarta Sans)
- Chart.js 4.x (Web Analytics en Canvas)
- JavaScript Vanilla ES6+
