import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  Cpu,
  Layers,
  Boxes,
  CreditCard,
  Clock,
  Sparkles,
  FolderCode,
  ChevronRight,
  Target
} from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { ProjectGallery } from "@/components/projects/ProjectGallery"
import { CodeShowcase } from "@/components/projects/CodeShowcase"

interface DetailedProject {
  title: string
  description: string
  content: string
  imageUrl: string
  images?: { url: string; caption: string }[]
  technologies: string[]
  demoUrl: string
  githubUrl: string
  status?: string
  problem: string
  solution: string
  architecture: string
  challenges: string
  results: string
  // Campos opcionales para proyectos avanzados como LibretaX
  businessPotential?: { title: string; description: string }[]
  keyFeatures?: { title: string; description: string; items?: string[] }[]
  projectStructure?: { title: string; filepath?: string; description?: string }[]
  codeShowcases?: { title: string; filepath?: string; description: string; code: string; language: string }[]
}

const libretaxProject: DetailedProject = {
  title: "LibretaX 📦📊",
  description: "Plataforma SaaS Multi-Tenant de Gestión, Inventario Físico y Rentabilidad para Vendedores de Mercado Libre",
  content: "LibretaX (evolución integral de Klyvo / Stockly) es una plataforma SaaS multi-tenant de alto rendimiento diseñada para centralizar la operativa comercial, el control exhaustivo de inventario físico y el cálculo de rentabilidad neta en tiempo real ('Bolsillo Limpio') para vendedores profesionales del ecosistema de Mercado Libre. Combina sincronización asíncrona resiliente mediante webhooks, auditoría contable por publicación, control de depósitos físicos con desglose de insumos (BOM), analítica de Mercado Libre ADS y herramientas de inteligencia artificial aplicada bajo estrictos controles transaccionales, de cuota y seguridad multi-tenant RLS.",
  imageUrl: "/images/libretax-portada.png",
  images: [
    { url: "/images/libretax-wordmark-dark.png", caption: "Logo Oficial de LibretaX: Identidad de marca de la plataforma SaaS para Mercado Libre." },
    { url: "/images/klyvo-dashboard-v2.png", caption: "Dashboard Principal: KPIs en tiempo real (Facturación bruta, Bolsillo Limpio, margen consolidado, alertas de stock crítico y top de productos)." },
    { url: "/images/klyvo-finanzas.png", caption: "Finanzas y P&L: Estado de resultados completo con comisiones ML discriminadas, costos de envío bonificados, CMV e impuestos." }
  ],
  technologies: ["Next.js 16 (App Router, Turbopack)", "React 19", "Tailwind CSS 4", "Supabase (PostgreSQL 16 / RLS)", "Inngest 4.4 (Workers & Cron)", "OpenAI API (GPT-4o-mini)", "Google Generative AI (Gemini 1.5 Flash)", "Mercado Libre API (OAuth2, Items, Orders, Promos, Ads)", "Mercado Pago SDK", "WhatsApp Cloud API", "Playwright", "TypeScript 6"],
  demoUrl: "https://stockly-six-opal.vercel.app/",
  githubUrl: "https://github.com/yoelzoff-glitch/Stockly.git",
  status: "Release Candidate — Listo para Producción",
  problem: "Vender a escala en Mercado Libre presenta desafíos críticos que afectan directamente la rentabilidad: falta de visibilidad sobre el margen neto real tras deducir comisiones variables por categoría y tipo de publicación (Clásica vs Premium), costos dinámicos de envíos bonificados, cargos por financiamiento en cuotas, retenciones impositivas y CMV. A ello se suma la desconexión entre el stock publicado y el inventario físico real en depósito propio (insumos, embalajes, kits/combos), herramientas fragmentadas en planillas de cálculo propensas a errores humanos y el alto riesgo operativo de administrar múltiples cuentas sin colisiones.",
  solution: "LibretaX unifica toda la operativa comercial en una consola gerencial integral con sincronización asíncrona bidireccional vía webhooks e idempotencia estricta. Brinda desglose contable unitario por orden con cálculo en tiempo real del 'Bolsillo Limpio', administración de depósito físico desacoplado con listas de materiales (BOM) y rotación multi-período (mes en curso, 30, 60 y 90 días), corte contable inteligente de presupuestos de gastos diarios preservando el historial acumulado, analítica de rentabilidad publicitaria neta en Mercado Libre ADS y el Copiloto Operacional IA (Web y WhatsApp) con doble factor de confirmación ('confirmo') para acciones críticas de catálogo.",
  architecture: "Monolito modular serverless de alta disponibilidad montado sobre Next.js 16 (App Router con Turbopack) y Supabase (PostgreSQL 16). La seguridad multi-tenant se sustenta en Row Level Security (RLS) estricto en 44 tablas canónicas, complementado con una doble barrera en Server Actions y Route Handlers ('requireTenantContext' y 'assertRequestedTenant'). Las tareas de cómputo intensivo y sincronizaciones de background son orquestadas por Inngest (12 funciones de workers y cron jobs) con un sistema de leases distribuidos ('acquire_operation_lease') para prevenir condiciones de carrera. Se conecta con OpenAI y Google Gemini para el copiloto conversacional, Mercado Libre con renovación atómica de credenciales OAuth2, Mercado Pago para suscripciones recurrentes y WhatsApp Cloud API validada mediante firmas criptográficas X-Hub-Signature-256.",
  challenges: "Garantizar aislamiento hermético de datos multi-tenant respaldado por suites de auditoría automatizada ('audit:rls', 'audit:auth'), gestionar la resiliencia de la API de Mercado Libre con auto-refresh transparente ante respuestas 401 y reintentos con retroceso exponencial respetando la cabecera 'Retry-After', ejecutar consumos atómicos de cuotas de IA mediante RPCs transaccionales en PostgreSQL ('consume_tenant_quota'), diseñar el corte contable de gastos diarios congelando el acumulado previo sin recalcular retroactivamente la caja, y sostener una cobertura rigurosa con +430 tests unitarios y pruebas E2E con Playwright.",
  results: "Plataforma consolidada en Release Candidate con suites de auditoría aprobadas y lista para el onboarding de comercios piloto y producción comercial. Garantiza exportación contable en streaming (CSV) adaptada a estudios impositivos, eliminación de quiebres imprevistos de inventario físico gracias a la explosión de kits BOM y alertas de reposición, control exacto del ROAS y ACOS publicitario, y una reducción drástica de la carga operativa mediante automatizaciones y copiloto IA 24/7.",
  businessPotential: [
    {
      title: "Métricas de 'Bolsillo Limpio' y P&L en Tiempo Real",
      description: "Conciliación financiera automática desde la facturación bruta hasta el resultado neto libre tras liquidar comisiones de Mercado Libre, envíos bonificados, descuentos comerciales, CMV, retenciones impositivas (IIBB) y costos operativos fijos."
    },
    {
      title: "Depósito Físico Desacoplado con Estructura BOM",
      description: "Gestión de stock físico independiente del catálogo de Mercado Libre. Soporte para productos compuestos y kits con explosión automática de materias primas/packaging y métricas de velocidad de venta en ventanas de 30, 60 y 90 días."
    },
    {
      title: "Copiloto Operacional IA Multi-Canal (Web & WhatsApp)",
      description: "Asistente inteligente con GPT-4o-mini y Gemini 1.5 Flash para responder consultas operativas en lenguaje natural, sugerir títulos SEO y analizar a la competencia, protegido por confirmación explícita obligatoria ('confirmo') para modificaciones en catálogo."
    },
    {
      title: "Contabilidad de Gastos con Corte Diario Inteligente",
      description: "Gastos fijos, alícuotas impositivas y gastos de acumulación diaria con IVA 21%. Permite actualizar presupuestos a mitad de mes congelando el valor anterior en el historial sin alterar retroactivamente los días transcurridos."
    }
  ],
  keyFeatures: [
    {
      title: "1. Módulo Operación & Dashboard en Tiempo Real",
      description: "Centro neurálgico para supervisión comercial, logística y contingencias:",
      items: [
        "Dashboard Gerencial: Visualización en tiempo real de facturación bruta, Bolsillo Limpio, margen consolidado, ticket promedio y alertas preventivas de stock crítico.",
        "Desglose Contable por Orden: Auditoría unitaria con discriminación de comisiones (Clásica vs Premium), costos de envío asumidos, CMV e impuestos.",
        "Exportación Contable en Streaming: Generación ultraveloz de reportes CSV preparados para contadores y sistemas contables externos.",
        "Cancelaciones & Devoluciones: Reversión automática e inmediata de unidades al inventario físico y reconciliación contable de comisiones de Mercado Libre."
      ]
    },
    {
      title: "2. Módulo Catálogo & Depósito Físico con BOM",
      description: "Sincronización de publicaciones y control riguroso de inventario real:",
      items: [
        "Estructura de Insumos y Componentes (BOM): Relación N-a-M para costeo dinámico y explosión de kits en componentes unitarios al descontar existencias por venta.",
        "Kárdex de Movimientos Auditable: Historial detallado de entradas por compras a proveedores, salidas por ventas, mermas y ajustes manuales con motivo.",
        "Análisis de Rotación Multi-Período: Velocidad de venta en mes en curso, últimos 30, 60 y 90 días para planificar compras inteligentes y evitar quiebres.",
        "Simulador de Precios y Márgenes: Proyección interactiva de comisiones, fletes, impuestos y ganancia neta antes de modificar precios en Mercado Libre."
      ]
    },
    {
      title: "3. Módulo Rentabilidad, Finanzas (P&L) & Mercado Libre ADS",
      description: "Auditoría de resultados económicos y eficiencia en publicidad:",
      items: [
        "Estado de Resultados Completo (P&L): Trazabilidad desde ingreso bruto hasta el margen de caja limpio porcentual.",
        "Corte Inteligente de Presupuestos Diarios: Congela la tarifa previa hasta el día anterior y aplica la nueva a partir de hoy, preservando la exactitud del acumulado.",
        "Mercado Libre ADS (Publicidad): Métricas de inversión, impresiones, clics, ACOS y ROAS en tiempo real, cruzando venta atribuida con CMV para calcular el beneficio publicitario neto.",
        "Seller Promotions API: Monitoreo de ofertas relámpago y cupones con discriminación de subsidio (vendedor vs Mercado Libre) y protección de margen mínimo."
      ]
    },
    {
      title: "4. Copiloto Operacional IA & Guardrails de Seguridad",
      description: "Asistente con inteligencia artificial integrado en Web y WhatsApp Cloud:",
      items: [
        "Consultas Operativas en Lenguaje Natural: Respuestas inmediatas con datos reales sobre ventas, productos con stock en riesgo y publicaciones más rentables.",
        "Doble Factor de Confirmación Obligatorio: Intercepta y rechaza respuestas informales ('ok', 'dale') forzando al usuario a escribir 'confirmo' antes de alterar precios o publicaciones.",
        "Deducción Atómica de Cuotas: RPCs transaccionales 'consume_tenant_quota' vinculadas al hash del payload para prevenir duplicados y sobreconsumos.",
        "Auditoría SEO & Competencia: Generación de títulos optimizados para el buscador de Mercado Libre y comparativa de publicaciones rivales."
      ]
    },
    {
      title: "5. Arquitectura Técnica & Seguridad Multi-Tenant",
      description: "Aislamiento hermético de datos y resiliencia en infraestructura:",
      items: [
        "Row Level Security (RLS) en 44 Tablas: Políticas PostgreSQL forzadas al tenant_id de la sesión autenticada.",
        "Doble Barrera de Aplicación: Verificación obligatoria en cada Server Action y Route Handler mediante 'requireTenantContext' y 'assertRequestedTenant'.",
        "Firmas Criptográficas de Webhooks: Validación timingSafeEqual de firmas X-Hub-Signature-256 (WhatsApp) y firmas V2 (Mercado Pago).",
        "Leases Distribuidos: Candados en base de datos ('acquire_operation_lease') para evitar colisiones de ejecución concurrente en procesos pesados."
      ]
    },
    {
      title: "6. Resiliencia de APIs Externas & Background Workers",
      description: "Tolerancia a fallos, reintentos inteligentes y testing exhaustivo:",
      items: [
        "Auto-Sanación OAuth de Mercado Libre: Auto-refresh de tokens próximos a expirar y manejo transparente de errores 401 a mitad de petición.",
        "Clasificador de Errores Externos: Falla rápida en errores no reintentables y reintentos automáticos con backoff exponencial respetando Retry-After.",
        "12 Workers Inngest Registrados: Tareas asíncronas de sincronización periódica desacopladas de límites de tiempo de funciones serverless.",
        "+430 Tests & Suites de Auditoría: Pipeline de calidad con tests unitarios, suites 'audit:rls', 'audit:auth', 'audit:webhooks' y pruebas E2E con Playwright."
      ]
    }
  ],
  projectStructure: [
    {
      title: "src/app/",
      filepath: "src/app/",
      description: "Rutas principales con Next.js 16 App Router, layouts protegidos multi-tenant y Server Actions."
    },
    {
      title: "src/app/api/webhooks/",
      filepath: "src/app/api/webhooks/",
      description: "Endpoints criptográficamente auditados para webhooks de Mercado Libre, Mercado Pago y WhatsApp."
    },
    {
      title: "src/app/dashboard/",
      filepath: "src/app/dashboard/",
      description: "Módulos de Operación, Catálogo & BOM, Depósito Físico, Finanzas (P&L), Gastos y Copiloto IA."
    },
    {
      title: "src/services/meli/",
      filepath: "src/services/meli/",
      description: "Cliente HTTP resiliente con auto-refresh OAuth, reintentos exponenciales y adaptadores de catálogo y órdenes."
    },
    {
      title: "src/services/inventory/",
      filepath: "src/services/inventory/",
      description: "Kárdex de movimientos, cálculo de BOM (insumos y combos) y análisis de rotación multi-período."
    },
    {
      title: "src/services/ai/",
      filepath: "src/services/ai/",
      description: "Orquestación multi-modelo (GPT-4o-mini & Gemini 1.5 Flash), guardrails de seguridad y deducción atómica de cuotas."
    },
    {
      title: "src/inngest/",
      filepath: "src/inngest/",
      description: "12 funciones de background workers (sincronizaciones periódicas, corte de presupuesto diario, digest por WhatsApp)."
    }
  ],
  codeShowcases: [
    {
      title: "Cliente de Mercado Libre Auto-Sanable y Resiliente",
      filepath: "src/services/meli/client.ts",
      description: "Muestra cómo LibretaX automatiza la renovación de tokens OAuth caducados y gestiona errores 401 Unauthorized de forma transparente a mitad del flujo de petición, clasificando errores y registrando alertas en base de datos si ocurre un fallo permanente.",
      language: "typescript",
      code: `// Fragmento simplificado del wrapper del cliente HTTP de Mercado Libre
export async function meliFetch({
  tenantId,
  meliAccountId,
  endpoint,
  method = "GET",
  body
}: MeliFetchArgs): Promise<any> {
  const supabase = createAdminClient();
  
  // 1. Cargar las credenciales del tenant desde base de datos
  let query = supabase.from("meli_accounts").select("*");
  // ... resolución de cuenta por meliAccountId o tenantId ...
  const account = await query.single();
  let accessToken = account.access_token;

  // 2. Control Proactivo: Si el token expira en menos de 10 min, refrescarlo antes de hacer la llamada
  let needsRefresh = false;
  if (account.token_expires_at) {
    const expiresAt = new Date(account.token_expires_at).getTime();
    const tenMinutes = 10 * 60 * 1000;
    if (expiresAt - Date.now() < tenMinutes) needsRefresh = true;
  }

  if (needsRefresh) {
    accessToken = await refreshMeliToken(account.id); // Lógica de renovación vía API oficial de ML
  }

  // 3. Ejecutar Petición
  const executeRequest = async (token: string) => {
    return fetch(\`https://api.mercadolibre.com\${endpoint}\`, {
      method,
      headers: {
        "Authorization": \`Bearer \${token}\`,
        "Content-Type": "application/json"
      },
      body: body ? JSON.stringify(body) : undefined
    });
  };

  let response = await executeRequest(accessToken);

  // 4. Control Reactivo: Si responde 401 (Token inválido en vuelo), renovar inmediatamente y reintentar
  if (response.status === 401) {
    console.warn("Received 401 from ML. Attempting token refresh...");
    try {
      accessToken = await refreshMeliToken(account.id);
      response = await executeRequest(accessToken); // Reintento con credenciales frescas
    } catch (refreshErr) {
      console.error("Refresh and retry failed");
    }
  }

  // 5. Manejo del Fallo Permanente: Desactivar cuenta, disparar alertas y registrar en auditoría
  if (!response.ok) {
    const errorText = await response.text();
    if (response.status === 401) {
      await supabase
        .from("meli_accounts")
        .update({ status: "error", sync_error: errorText })
        .eq("id", account.id);

      await createAlert({
        tenantId: account.tenant_id,
        title: "Fallo de comunicación con Mercado Libre",
        body: \`La sincronización ha fallado: \${errorText.substring(0, 100)}\`,
        severity: "error"
      });
    }
    
    throw new AppError("VALIDATION_ERROR", \`Meli API Error: \${errorText}\`, response.status);
  }

  return response.json();
}`
    },
    {
      title: "Interceptor de Seguridad Conversacional (LibretaX Copilot Guardrails)",
      filepath: "src/services/ai/agent.ts",
      description: "Muestra la lógica de interceptación que fuerza al usuario a escribir exactamente la palabra 'confirmo' o 'confirmar' para poder ejecutar acciones destructivas previamente encoladas, previniendo accidentes conversacionales e ignorando afirmaciones genéricas como 'ok' o 'dale'.",
      language: "typescript",
      code: `// Interceptor en el Orquestador del Agente de Inteligencia Artificial
export async function runBusinessAgent({ tenantId, userMessage, channel, fromPhone }) {
  // ... validaciones de límites de consumo mensual ...
  const session = await getActiveSession({ tenantId, channel, fromPhone });
  const lowerMsg = userMessage.trim().toLowerCase();
  
  const validConfirms = ['confirmo', 'confirmar', 'sí, confirmo', 'si, confirmo', 'si confirmo'];
  const invalidConfirms = ['ok', 'dale', 'si', 'sí', 'bueno', 'perfecto', 'listo', 'avanza', 'hacelo'];

  // Intercepta confirmación formal
  if (validConfirms.includes(lowerMsg)) {
    if (session && session.current_action_id) {
      const { confirmPendingAction } = await import('@/services/ai/actions/confirm');
      const res = await confirmPendingAction(tenantId, session.current_action_id);
      
      if (res.success) {
        await clearSessionState(session.id);
        return { response: "¡Acción confirmada y ejecutada con éxito en Mercado Libre!", product_id: null };
      }
      return { response: \`Error al aplicar la acción: \${res.error}\`, product_id: null };
    }
    return { response: "No tienes ninguna acción pendiente en esta conversación para confirmar.", product_id: null };
  }

  // Intercepta respuestas informales afirmativas pero peligrosas
  if (invalidConfirms.includes(lowerMsg)) {
    if (session && (session.current_action_id || session.current_workflow_id)) {
      return { 
        response: "⚠️ *Por seguridad*, debes escribir exactamente la palabra **'confirmo'** o **'confirmar'** para ejecutar esta acción crítica.", 
        product_id: null 
      };
    }
  }

  // Intercepta cancelaciones explícitas
  if (lowerMsg === 'cancelar' || lowerMsg === 'no') {
    if (session && session.current_action_id) {
      await cancelPendingAction(tenantId, session.current_action_id);
      await clearSessionState(session.id);
      return { response: "Acción cancelada. No se modificó nada en Mercado Libre.", product_id: null };
    }
  }
  
  // ... procesamiento normal del agente con OpenAI / Gemini si no hay interceptaciones ...
}`
    },
    {
      title: "Webhook de Facturación con Período de Gracia (Mercado Pago Webhook)",
      filepath: "src/app/api/mercadopago/webhook/route.ts",
      description: "Este webhook procesa las suscripciones de Mercado Pago y gestiona de forma segura el ciclo de facturación, asegurándose de respetar el período de gracia pagado en caso de cancelación voluntaria del plan premium.",
      language: "typescript",
      code: `// Controlador de Webhook de suscripciones de Mercado Pago
export async function POST(req: Request) {
  try {
    const url = new URL(req.url);

    // 1. Filtro de Seguridad: Validar token secreto del webhook
    const secret = url.searchParams.get("secret");
    if (process.env.MERCADOPAGO_WEBHOOK_SECRET && secret !== process.env.MERCADOPAGO_WEBHOOK_SECRET) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const id = url.searchParams.get("id") || url.searchParams.get("data.id");
    const type = url.searchParams.get("type");
    
    // ... lectura y normalización del body ...
    const topic = body.type || body.action || type;
    const resourceId = body.data?.id || id;

    if (topic === "subscription_preapproval" && resourceId) {
      const subscription = await getSubscription(resourceId); // API Mercado Pago
      const externalReference = subscription.external_reference || "";
      const [refType, refId] = externalReference.split("_"); // Ej. "tenant_uuid"
      const status = subscription.status; // 'authorized', 'paused', 'cancelled'
      const plan = subscription.reason === 'LibretaX Ultra' ? 'ultra' : 'pro';

      if (refType && refId) {
        const supabase = createAdminClient();
        let targetPlan = plan;
        let isExpired = false;

        // Recuperar la suscripción actual en DB para evaluar el período de gracia
        const { data: currentSub } = await supabase.from('subscriptions').select('*').eq('tenant_id', refId).single();

        if (status === 'authorized') {
          targetPlan = plan;
        } else if (status === 'cancelled' || status === 'canceled') {
          // Lógica de Período de Gracia: Conservar acceso premium si todavía está en plazo pagado
          if (currentSub?.expires_at && new Date(currentSub.expires_at) > new Date()) {
            targetPlan = currentSub.plan; 
          } else {
            targetPlan = 'starter'; // Expiró el plazo, degradar cuenta
            isExpired = true;
          }
        }

        // Actualizar plan del tenant y base de suscripción
        await supabase.from("subscriptions").upsert({
          tenant_id: refId,
          plan: targetPlan,
          status: status === 'authorized' ? 'active' : 'canceled',
          mercadopago_subscription_id: subscription.id,
          expires_at: status === 'authorized' ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() : (isExpired ? null : currentSub?.expires_at),
        });

        await supabase.from("tenants").update({ plan: targetPlan }).eq("id", refId);
        logger.info(\`Suscripción actualizada para \${refId} a plan \${targetPlan}\`);
      }
    }

    return new NextResponse("OK", { status: 200 });
  } catch (error: any) {
    Sentry.captureException(error);
    return new NextResponse("Error", { status: 500 });
  }
}`
    },
    {
      title: "Velocidad de Ventas y Reabastecimiento (BOM & Smart Inventory)",
      filepath: "src/app/dashboard/internal-stock/actions.ts",
      description: "Acción del servidor que calcula el consumo de componentes de depósito (BOM) basado en órdenes históricas de los últimos 30 días, entregando sugerencias de reabastecimiento automáticas y ajustadas a un 20% de stock de seguridad.",
      language: "typescript",
      code: `// Server Action para obtener inventario con análisis de velocidad de ventas
export async function getInventoryItems() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const { data: profile } = await supabase.from("profiles").select("tenant_id").eq("id", user.id).single();
  const tenantId = profile?.tenant_id;

  // 1. Traer todos los items de depósito (componentes/materia prima)
  const { data: items } = await supabase.from("inventory_items").select("*").eq("tenant_id", tenantId);

  // 2. Traer órdenes realizadas en los últimos 30 días
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const { data: recentOrders } = await supabase.from("orders").select("id").eq("tenant_id", tenantId).gt("date_created", thirtyDaysAgo);
  const orderIds = recentOrders?.map(o => o.id) || [];
  
  let salesPerComponent: Record<string, number> = {};

  if (orderIds.length > 0) {
    // Buscar items comprados en esas órdenes
    const { data: orderItems } = await supabase.from("order_items").select("product_id, quantity").in("order_id", orderIds);
    const productIds = Array.from(new Set(orderItems?.map(i => i.product_id).filter(Boolean))) as string[];

    if (productIds.length > 0) {
      // Cruzar con la tabla puente que define qué componentes tiene cada producto
      const { data: productComponents } = await supabase.from("product_components").select("product_id, inventory_item_id, quantity").in("product_id", productIds);

      // Calcular el volumen total de componentes consumidos
      orderItems?.forEach(item => {
        if (!item.product_id) return;
        const components = productComponents?.filter(c => c.product_id === item.product_id) || [];
        components.forEach(comp => {
          if (comp.inventory_item_id) {
            const qtyUsed = (item.quantity || 1) * (comp.quantity || 1);
            salesPerComponent[comp.inventory_item_id] = (salesPerComponent[comp.inventory_item_id] || 0) + qtyUsed;
          }
        });
      });
    }
  }

  // 3. Cruzar stock actual y estimar recomendación (+20% stock de seguridad)
  return items.map(item => {
    const salesLast30 = salesPerComponent[item.id] || 0;
    const targetStock = Math.ceil(salesLast30 * 1.2); // Proyección a 30 días + 20% margen de seguridad
    const recommended_restock = Math.max(0, targetStock - (item.current_stock || 0));
    
    return {
      ...item,
      sales_last_30_days: salesLast30,
      recommended_restock: salesLast30 > 0 ? recommended_restock : 0
    };
  });
}`
    },
    {
      title: "Corte de Presupuesto Diario Inteligente (Historial Preservado)",
      filepath: "src/app/dashboard/expenses/actions.ts",
      description: "Al actualizar la tarifa diaria de un gasto a mitad de mes, congela el gasto previo hasta la víspera (preservando los días transcurridos al costo anterior) y abre el nuevo gasto a partir de hoy, garantizando que el Bolsillo Limpio acumulado no sufra recálculos retroactivos erróneos.",
      language: "typescript",
      code: `// Server Action para actualizar gastos con acumulación diaria inteligente
export async function updateDailyExpense({ tenantId, expenseId, newDailyAmount, effectiveFromToday = true }) {
  const supabase = createAdminClient();
  const todayStr = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  // 1. Obtener el gasto diario actual
  const { data: currentExpense } = await supabase
    .from("recurring_expenses")
    .select("*")
    .eq("id", expenseId)
    .eq("tenant_id", tenantId)
    .single();

  if (!currentExpense) throw new Error("Gasto no encontrado");

  // 2. Transacción de Corte: Congelar el gasto anterior hasta ayer
  await supabase
    .from("recurring_expenses")
    .update({ 
      end_date: yesterday,
      is_active: false,
      notes: \`Corte automático: congelado a \${currentExpense.amount}/día hasta \${yesterday}\`
    })
    .eq("id", expenseId);

  // 3. Crear el nuevo gasto vigente desde hoy con la nueva tarifa
  const { data: newExpense } = await supabase
    .from("recurring_expenses")
    .insert({
      tenant_id: tenantId,
      name: currentExpense.name,
      category: currentExpense.category,
      amount: newDailyAmount,
      frequency: "daily",
      applies_iva: currentExpense.applies_iva,
      start_date: todayStr,
      end_date: null,
      is_active: true
    })
    .select()
    .single();

  // 4. Invalidar caché del Estado de Resultados (P&L) del mes en curso
  await revalidateFinancials(tenantId);
  return { success: true, newExpenseId: newExpense.id };
}`
    }
  ]
}

const projectData: Record<string, DetailedProject> = {
  "libretax": libretaxProject,
  "klyvo": libretaxProject,
  "zoma": {
    title: "ZOMA ERP",
    description: "Sistema de Gestión Comercial SaaS Multi-Tenant con arquitectura de cuatro portales, facturación oficial AFIP e integración de Mercado Pago.",
    content: "ZOMA ERP es una plataforma SaaS de alto rendimiento diseñada para la gestión comercial integral de PyMEs, mayoristas y distribuidores. La plataforma permite administrar en tiempo real presupuestos, pedidos, stock, proveedores, tesorería y cuentas corrientes comerciales bajo una arquitectura robusta, escalable y aislada para múltiples empresas (multi-tenant) segura mediante Supabase RLS y caché de sesión en Middleware.",
    imageUrl: "/images/zoma portada.png",
    technologies: ["Next.js 15 App Router", "React 19", "Supabase (PostgreSQL)", "Supabase Channels", "Mercado Pago API", "AFIP API", "Tailwind CSS", "Vanilla CSS"],
    demoUrl: "https://zomahub.com.ar",
    githubUrl: "#",
    status: "En Producción",
    problem: "Las empresas tradicionales manejaban a sus vendedores y clientes mediante Excel y WhatsApp. Se perdía trazabilidad de los presupuestos, los vendedores no tenían herramientas móviles rápidas en calle y los clientes finales no podían autogestionarse. Además, la exportación de reportes fiscales y la vinculación de cobros para múltiples comercios generaban una gran carga administrativa y de soporte diario.",
    solution: "Se desarrolló una arquitectura SaaS con Namespaces y control de acceso basado en roles (RBAC). El sistema cuenta con cuatro portales dedicados (Administración, Vendedores mobile-first, Clientes B2B y Contadores). Implementa una pasarela de cobros Multi-Merchant de Mercado Pago con auto-refresh de tokens OAuth, un chat corporativo en tiempo real y la exportación de reportes fiscales conformes con los estándares de Libro de IVA Digital de AFIP.",
    architecture: "Estructura de Namespacing estricta en el routing de Next.js. La persistencia y el aislamiento de datos se garantizan mediante PostgreSQL Row Level Security (RLS) consumido a través de Supabase, validado con una función de membresía SQL. Los procesos asíncronos y flujos impositivos están optimizados mediante Server Actions y endpoints seguros, complementados con cookies cifradas para la optimización de sesión.",
    challenges: "Lograr un aislamiento perfecto de datos entre la fuerza de ventas preventistas y clientes, mientras se mantiene una vista consolidadamente ágil para el administrador. Asimismo, estructurar la verificación de firmas webhooks contra ataques de replay mediante firmas criptográficas HMAC-SHA256, y formatear los archivos de importación de la AFIP cumpliendo estrictos patrones de ancho fijo.",
    results: "ZOMA ERP unifica el control de la empresa en un solo ecosistema seguro. Los vendedores cargan pedidos rápidamente en calle desde el móvil con validación preventiva de deudas, los contadores descargan en segundos el Libro de IVA Digital en formato TXT y los clientes finales autogestionan y pagan sus compras autónomamente.",
    businessPotential: [
      {
        title: "Aislamiento Multi-Tenant",
        description: "Asegura la total privacidad e independencia de datos entre empresas clientes mediante directivas RLS nativas de base de datos."
      },
      {
        title: "Mercado Pago Multi-Merchant",
        description: "Habilita a cada tenant a conectar su propia cuenta de Mercado Pago vía OAuth, recibiendo el dinero de sus ventas directo a su cuenta."
      },
      {
        title: "Automatización Impositiva",
        description: "Reduce horas de trabajo contable al permitir la exportación de layouts TXT listos para importar al portal de AFIP de forma autónoma."
      },
      {
        title: "Trazabilidad Comercial Real-time",
        description: "Notifica visualmente de manera inmediata cuándo un cliente lee un presupuesto público y facilita la comunicación con chat en vivo."
      }
    ],
    projectStructure: [
      {
        title: "app/(app)/",
        filepath: "app/(app)/",
        description: "Portal Administrativo principal: dashboard, catálogos, tesorería, ventas y compras."
      },
      {
        title: "app/vendedor/",
        filepath: "app/vendedor/",
        description: "Portal mobile-first para preventistas y fuerza de ventas en la calle."
      },
      {
        title: "app/portal/",
        filepath: "app/portal/",
        description: "Portal B2B de autogestión de clientes, descarga de resúmenes de cuenta y pasarela de pago."
      },
      {
        title: "app/(app)/contador/",
        filepath: "app/(app)/contador/",
        description: "Portal de contabilidad dedicado a la exportación del Libro de IVA Digital e informes impositivos."
      },
      {
        title: "lib/mercadopago/",
        filepath: "lib/mercadopago/",
        description: "Integración OAuth, generación de preferencias dinámicas y verificación HMAC-SHA256 de webhooks."
      }
    ],
    keyFeatures: [
      {
        title: "1. Arquitectura de Cuatro Portales (RBAC & Middleware)",
        description: "Separación lógica completa y control de accesos mediante middleware de Next.js:",
        items: [
          "Portal Administrativo: Métricas financieras dinámicas, ABM de productos y control de caja diaria.",
          "Portal Vendedores: Mobile-first con validación interactiva de deudas previas a la confirmación de venta.",
          "Portal Clientes: Autogestión de carritos, consulta de resúmenes de cuenta corriente y pagos integrados.",
          "Portal Contador: Descarga de reportes fiscales y facturación sin requerir soporte administrativo."
        ]
      },
      {
        title: "2. Aislamiento Multi-Tenant (Supabase RLS y Middleware Cache)",
        description: "Estructura de aislamiento de alta seguridad a nivel base de datos y optimización de rendimiento:",
        items: [
          "Políticas de RLS PostgreSQL: Filtro nativo mediante función definidora (is_member_of) que contrasta el company_id del usuario.",
          "Middleware Session Cache: Cookies de sesión seguras por 2 horas para evitar consultas redundantes de rol y suscripción a la DB."
        ]
      },
      {
        title: "3. Mercado Pago Multi-Merchant (OAuth 2.0)",
        description: "Integración multitransaccional aislada para cobros directos:",
        items: [
          "Refresco automático de tokens: Renovación asíncrona de Access Tokens oficiales mediante Refresh Tokens persistidos en DB.",
          "Preferencias de Pago Dinámicas: Generación automatizada de links de checkout apuntando a credenciales específicas de cada comercio."
        ]
      },
      {
        title: "4. Colaboración y Monitoreo Real-time (Websockets)",
        description: "Canales de comunicación colaborativa viva mediante Supabase Channels:",
        items: [
          "Chat Corporativo Interno: Envío instantáneo de mensajes de chat y estado de presencia Online/Offline de los miembros del equipo.",
          "Tracking de Presupuestos: Notificación visual pasiva e inmediata en el panel administrativo en cuanto el cliente abre el link público."
        ]
      },
      {
        title: "5. Facturación e IVA Digital (AFIP API)",
        description: "Automatización fiscal y de facturación electrónica en Argentina:",
        items: [
          "Emisión de CAE: Integración y firma XML del comprobante de venta oficial con obtención de CAE y fechas legales.",
          "Libro de IVA Digital: Exportación directa en formato TXT adaptado estrictamente a las especificaciones de ancho fijo de la AFIP."
        ]
      },
      {
        title: "6. Resiliencia contra Fraudes y Error Handling",
        description: "Medidas de control robustas para evitar ataques y mantener consistencia:",
        items: [
          "Firma Criptográfica HMAC: Verificación exhaustiva con safeCompare y tolerancia de marca de tiempo menor a 10 min en webhooks.",
          "Consistencia Transaccional: Copia forzada de precios de lista a ítems de pedido para proteger cotizaciones ante futuros cambios de precio."
        ]
      }
    ],
    codeShowcases: [
      {
        title: "Aislamiento de Sesión y RLS en Base de Datos",
        filepath: "middleware.ts & functions.sql",
        description: "Muestra la política SQL RLS mediante la función de pertenencia y el middleware de Next.js que cachea la sesión y rol en cookies seguras por 2 horas para optimizar el rendimiento y evitar consultas redundantes a la DB.",
        language: "typescript",
        code: `// Función auxiliar para validación de pertenencia
CREATE OR REPLACE FUNCTION public.is_member_of(company_uuid uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.users_profiles
    WHERE id = auth.uid() AND company_id = company_uuid
  ) OR EXISTS (
    SELECT 1 FROM public.customer_users
    WHERE auth_user_id = auth.uid() AND company_id = company_uuid
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

// Aplicación de política de aislamiento
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Aislamiento por Empresa" ON public.products
  FOR ALL
  USING (is_member_of(company_id));

// Middleware de Next.js con caché de sesión (2 horas)
if (!rol || !vencimientoEmpresa) {
  const { data: perfil } = await supabase
    .from('users_profiles')
    .select(\`
      role,
      company_id,
      companies ( subscription_expiry )
    \`)
    .eq('id', usuario.id)
    .single()

  if (perfil) {
    rol = perfil.role
    vencimientoEmpresa = perfil.companies?.subscription_expiry || 'none'

    // Guardamos en una cookie segura para evitar lecturas constantes de DB
    respuesta.cookies.set('sb-company-expiry', String(vencimientoEmpresa), {
      maxAge: 60 * 60 * 2, // Cache de 2 horas
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    })
  }
}`
      },
      {
        title: "Renovación de Tokens OAuth (Mercado Pago Multi-Merchant)",
        filepath: "lib/mercadopago/refreshAccessToken.ts",
        description: "Función de servidor que recupera las credenciales del tenant y realiza la llamada a Mercado Pago para renovar el Access Token antes de su expiración, actualizándolo de forma transparente en la base de datos.",
        language: "typescript",
        code: `export async function getValidMercadoPagoAccessToken(companyId: string): Promise<string | null> {
  const { data: account } = await supabaseAdmin
    .from('mp_accounts')
    .select('company_id, access_token, refresh_token, expires_at')
    .eq('company_id', companyId)
    .eq('connected', true)
    .single()

  if (!account) return null

  const now = Date.now()
  const expiresAt = account.expires_at ? new Date(account.expires_at).getTime() : 0
  const fiveMinutes = 5 * 60 * 1000

  // Si aún es válido, lo retornamos sin llamar al servidor de MP
  if (expiresAt && (expiresAt - now > fiveMinutes)) {
    return account.access_token
  }

  if (!account.refresh_token) return null

  // Solicitud de renovación a Mercado Pago
  const tokenResponse = await fetch('https://api.mercadopago.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'refresh_token',
      client_id: process.env.MERCADOPAGO_CLIENT_ID,
      client_secret: process.env.MERCADOPAGO_CLIENT_SECRET,
      refresh_token: account.refresh_token,
    }),
  })

  const tokenData = await tokenResponse.json()
  if (!tokenResponse.ok) return null

  const newExpiresAt = new Date(Date.now() + Number(tokenData.expires_in) * 1000).toISOString()

  // Guardamos las credenciales renovadas
  await supabaseAdmin
    .from('mp_accounts')
    .update({
      access_token: tokenData.access_token,
      refresh_token: tokenData.refresh_token || account.refresh_token,
      expires_at: newExpiresAt,
      updated_at: new Date().toISOString(),
    })
    .eq('company_id', companyId)

  return tokenData.access_token
}`
      },
      {
        title: "Suscripción Real-time y Estado de Presencia",
        filepath: "components/chat/GlobalChatBubble.tsx",
        description: "Implementa la conexión colaborativa en tiempo real por canal usando websockets de Supabase, filtrando por company_id e integrando el estado de presencia Online/Offline de los usuarios del tenant.",
        language: "typescript",
        code: `// Suscripción al canal de mensajería interno de la empresa
const channel = supabase
  .channel(\`company-chat-\${companyId}\`)
  .on('postgres_changes', { 
    event: 'INSERT', 
    schema: 'public', 
    table: 'company_messages', 
    filter: \`company_id=eq.\${companyId}\` 
  }, async (payload) => {
    const newMsg = payload.new as Message
    
    // Verificar si el mensaje está destinado a mí o al canal general
    const isForMe = !newMsg.receiver_id || newMsg.receiver_id === currentUserId || newMsg.sender_id === currentUserId
    if (!isForMe) return
    
    const { data: profile } = await supabase.from('users_profiles').select('full_name, role').eq('id', newMsg.sender_id).single()
    setMessages((prev) => [...prev, { ...newMsg, profiles: profile || undefined }])
  })
  .subscribe()

// Registro y visualización del estado de presencia (Online / Offline)
const presenceChannel = supabase.channel(\`presence-\${companyId}\`, {
  config: { presence: { key: currentUserId } }
})

presenceChannel
  .on('presence', { event: 'sync' }, () => {
    const newState = presenceChannel.presenceState()
    setOnlineUsers(new Set(Object.keys(newState)))
  })
  .subscribe(async (status) => {
    if (status === 'SUBSCRIBED') {
      await presenceChannel.track({ online_at: new Date().toISOString() })
    }
  })`
      },
      {
        title: "Exportación de IVA Ventas y Generación de Formato AFIP",
        filepath: "app/api/reports/libro-iva-digital/route.ts",
        description: "Formatea rigurosamente el reporte fiscal de comprobantes de ventas para cumplir con el layout de ancho fijo exigido por el Libro de IVA Digital de la AFIP, rellenando con ceros a la izquierda e importes multiplicados por 100.",
        language: "typescript",
        code: `// Formateo estricto del archivo de importación AFIP (IVA Ventas - Cabecera)
function formatAfipAmount(amount: number): string {
  // Multiplicado por 100, sin puntos ni comas, rellenado con ceros a la izquierda (15 caracteres)
  const integerVal = Math.round(amount * 100)
  return String(integerVal).padStart(15, '0')
}

// Composición del registro del comprobante (Cumpliendo especificación de RG AFIP)
let registro = ''
registro += f.invoice_date.replace(/-/g, '')           // 01-08: Fecha de comprobante
registro += padZeros(f.afip_comprobante_tipo, 3)        // 09-11: Tipo de comprobante
registro += padZeros(f.invoice_point_of_sale, 5)        // 12-16: Punto de venta
registro += padZeros(f.afip_comprobante_numero, 20)     // 17-36: Número de comprobante
// ... otros campos del layout AFIP ...
registro += formatAfipAmount(total)                     // 100-114: Importe Total
registro += formatAfipAmount(esInscripto ? neto : 0)    // 130-144: Neto Gravado
registro += formatAfipAmount(iva)                       // 145-159: IVA Liquidado`
      },
      {
        title: "Verificación de Firma y Prevención de Replay Attacks",
        filepath: "lib/mercadopago/verifyWebhookSignature.ts",
        description: "Valida la autenticidad del webhook recibido desde Mercado Pago, recalculando la firma Hmac-SHA256 y controlando la tolerancia de la marca de tiempo (timestamp) a un rango menor de 10 minutos.",
        language: "typescript",
        code: `export function verifyMercadoPagoWebhookSignature(req: NextRequest) {
  const secret = process.env.MERCADOPAGO_WEBHOOK_SECRET?.trim()
  const xSignature = req.headers.get('x-signature')
  const xRequestId = req.headers.get('x-request-id')

  if (!secret || !xSignature) return false

  // Parsear firma: contiene timestamp 'ts' y firma 'v1'
  let ts = '', receivedHash = ''
  xSignature.split(',').forEach(part => {
    const [key, value] = part.split('=')
    if (key?.trim() === 'ts') ts = value?.trim()
    if (key?.trim() === 'v1') receivedHash = value?.trim()
  })

  // Reconstrucción del manifiesto recibido
  const dataId = new URL(req.url).searchParams.get('id') || ''
  const manifest = \`id:\${dataId};request-id:\${xRequestId};ts:\${ts};\`

  const generatedHash = crypto.createHmac('sha256', secret).update(manifest).digest('hex')

  // safeCompare previene ataques de temporización (Timing Attacks)
  const isHashValid = safeCompare(generatedHash, receivedHash)

  // Validación de tolerancia horaria (Tolerancia máxima de 10 minutos)
  const timestampMs = Number(ts) * 1000
  const isWithinTolerance = Math.abs(Date.now() - timestampMs) < 10 * 60 * 1000

  return isHashValid && isWithinTolerance;
}`
      }
    ]
  },
  "ana-mary-joyas": {
    title: "Ana Mary Joyas 💎",
    description: "Plataforma de comercio electrónico a medida, de alto rendimiento y arquitectura modular (Headless), desarrollada para Ana Mary Joyas.",
    content: "Plataforma de comercio electrónico a medida, de alto rendimiento y arquitectura modular (Headless), desarrollada para Ana Mary Joyas. El sitio combina una experiencia de usuario fluida y de estética premium con integraciones profundas de sistemas de pago, logística, sincronización con marketplaces y un panel de análisis interno en tiempo real sin cookies ni scripts de terceros.",
    imageUrl: "/images/anamary-home.png",
    images: [
      { url: "/images/anamary-home.png", caption: "Home Page: Catálogo premium de joyas con animaciones fluidas y diseño responsivo." },
      { url: "/images/Analiticas Ana Mary Joyas.png", caption: "Analíticas Avanzadas: Dashboard de métricas en Ana Mary Joyas." },
      { url: "/images/Edicion Bloques Ana Mary Joyas.png", caption: "Panel Administrativo: Edición de bloques y contenido dinámico." }
    ],
    technologies: ["Next.js 16 (App Router)", "React 19", "Turbopack", "Tailwind CSS", "Framer Motion", "Supabase (PostgreSQL / RLS)", "Mercado Pago Custom API", "Mercado Libre Sync API", "Andreani Logística API"],
    demoUrl: "https://www.anamaryjoyas.com.ar",
    githubUrl: "#",
    status: "En Producción",
    problem: "Las joyerías de gama alta y estética premium necesitan plataformas de comercio electrónico sumamente veloces, visualmente impactantes y que no dependan de plantillas rígidas de Shopify/Tiendanube. Además, requieren una sincronización perfecta de stock con Mercado Libre para no vender productos sin stock físico, y una gestión logística y de cobro integrada directamente con Andreani y Mercado Pago para automatizar el día a día sin cargar datos manualmente.",
    solution: "Desarrollé una plataforma Headless de alto rendimiento a medida para Ana Mary Joyas. El frontend premium ofrece animaciones fluidas con Framer Motion, mientras que el backend y la base de datos están soportados por Supabase con políticas RLS de seguridad. Integré sincronización bidireccional en tiempo real con Mercado Libre (vía OAuth2 y Webhooks), procesamiento personalizado de Mercado Pago con cálculo de cuotas dinámico, y cotización/etiquetado automático con la API de Andreani. Además, implementé un sistema de analíticas nativo y privado.",
    architecture: "Next.js App Router (con SSR e Incremental Static Regeneration) para máxima velocidad de carga e indexación SEO. Persistencia de datos en Supabase (PostgreSQL) protegido mediante Row Level Security (RLS). Webhooks de Mercado Libre y Mercado Pago procesan transacciones y actualizaciones de catálogo de manera asíncrona y atómica. La infraestructura se despliega en Vercel, aprovechando sus Edge Functions y geolocalización nativa CDN.",
    challenges: "Lograr la sincronización de stock y catálogo bidireccional en tiempo real con la API de Mercado Libre tolerando fallas de comunicación, calcular costos logísticos dinámicamente con Andreani sin ralentizar la experiencia de checkout del usuario, e implementar un sistema de analíticas en tiempo real extremadamente liviano que preserve la privacidad del usuario sin scripts externos pesados.",
    results: "La plataforma unifica el control comercial en un panel administrativo robusto. Las ventas y el stock se sincronizan automáticamente con Mercado Libre reduciendo a cero los errores operativos, las etiquetas de Andreani se imprimen con un solo clic y las analíticas internas permiten al cliente auditar visitas, conversiones y distribución geográfica en vivo sin recurrir a rastreadores de terceros.",
    businessPotential: [
      {
        title: "Sincronización Automática con Mercado Libre",
        description: "Sincroniza stocks, precios, descripciones e imágenes de forma simultánea en la base de datos local y Mercado Libre, evitando discrepancias de stock."
      },
      {
        title: "Integración de Pagos Custom Flow con Mercado Pago",
        description: "Checkout Custom Flow transparente y sin redirecciones molestas, con cálculo dinámico de intereses de cuotas configurable desde el admin."
      },
      {
        title: "Logística Automatizada con Andreani",
        description: "Cotización en tiempo real durante la compra y generación automatizada de etiquetas de envío en PDF desde el panel de control."
      },
      {
        title: "Analíticas Propias de Privacidad Protegida",
        description: "Rastreador nativo con geolocalización CDN de Vercel y hashing de IP, reduciendo la carga y dependencia de scripts externos."
      }
    ],
    projectStructure: [
      {
        title: "app/",
        filepath: "app/",
        description: "Estructura de rutas en Next.js, incluyendo catálogo público, carrito, checkout nativo y panel de administración."
      },
      {
        title: "app/api/analytics/",
        filepath: "app/api/analytics/",
        description: "Endpoints del rastreador de visitas y agregaciones en tiempo real para el panel de analíticas."
      },
      {
        title: "app/api/payments/mercadopago/",
        filepath: "app/api/payments/mercadopago/",
        description: "Procesador de Webhooks IPN de Mercado Pago para validación de transacciones y estados de órdenes."
      },
      {
        title: "app/api/admin/shipping/andreani/",
        filepath: "app/api/admin/shipping/andreani/",
        description: "Módulo de automatización logística que interactúa con la API de Andreani para cotizaciones y etiquetas PDF."
      },
      {
        title: "lib/supabase/",
        filepath: "lib/supabase/",
        description: "Configuración de clientes de Supabase (anon y admin con service role para bypass de RLS del lado del servidor)."
      }
    ],
    keyFeatures: [
      {
        title: "1. Sincronización con Mercado Libre (Meli API)",
        description: "Integración de catálogo bidireccional automatizada para omnicanalidad:",
        items: [
          "Flujo OAuth2 Seguro: Vinculación de la cuenta oficial de Mercado Libre desde el panel administrativo.",
          "Webhooks en Tiempo Real: Recepción y procesamiento automático de notificaciones de Mercado Libre ante compras para unificar stock.",
          "Sincronización de Catálogo: Sincronización simultánea de precios, stock e imágenes de joyas entre la DB local y Mercado Libre."
        ]
      },
      {
        title: "2. Checkout Custom Flow & Cuotas (Mercado Pago API)",
        description: "Procesamiento nativo y adaptado para maximizar conversión de ventas:",
        items: [
          "Checkout Integrado: Pasarela de cobros segura y transparente sin redireccionar al usuario fuera de la plataforma.",
          "Cálculo Dinámico de Cuotas: Motor financiero parametrizable que aplica recargos configurados en el panel administrativo.",
          "Webhooks & IPN: Recepción atómica de confirmaciones de cobro que actualizan el estado de la compra en la base de datos."
        ]
      },
      {
        title: "3. Automatización de Envíos (Andreani API)",
        description: "Despacho automatizado de productos y cotizaciones logísticas:",
        items: [
          "Cotizador en Tiempo Real: Consulta de tarifas con IVA y plazos de entrega según código postal directamente en el checkout.",
          "Generador de Etiquetas PDF: Creación automática de la etiqueta postal oficial de Andreani con código de barras listo para despacho.",
          "Tracking Integrado: Sincronización de números de guía para el seguimiento de la orden por parte del comprador."
        ]
      },
      {
        title: "4. Analíticas Propias sin Cookies de Terceros",
        description: "Motor de seguimiento de visitas enfocado en rendimiento y privacidad:",
        items: [
          "Rastreador <AnalyticsTracker />: Componente de escucha React que detecta cambios de ruta en la navegación SPA.",
          "Geolocalización por CDN: Captura del origen geográfico mediante cabeceras CDN de Vercel del lado del servidor.",
          "Anonimización Criptográfica: Hashing en Base64 de la IP del visitante para identificar accesos únicos sin almacenar datos personales."
        ]
      },
      {
        title: "5. Panel de Administración Integrado",
        description: "Panel de control premium para el manejo comercial diario de la joyería:",
        items: [
          "Dashboard en Vivo: Pulsing Active Badge que cuenta usuarios online en los últimos 3 minutos con refresco de 15 segundos.",
          "Gestión de Colecciones y CRUD: ABM de joyas, asignación de stock, SKU y organización de colecciones en página de inicio.",
          "Configuración Operativa: Panel para ajustar intereses de cuotas, costos de envío y parámetros de las integraciones."
        ]
      }
    ],
    codeShowcases: [
      {
        title: "Rastreador de Visitas Nativo y Anonimización de IP",
        filepath: "components/analytics/AnalyticsTracker.tsx & app/api/analytics/track/route.ts",
        description: "Componente React que detecta cambios de ruta en Next.js y envía la métrica al servidor, donde se procesa la geolocalización provista por Vercel CDN y se aplica un hash SHA-256 a la IP para proteger la privacidad del usuario, antes de escribir mediante el cliente administrativo con bypass de RLS.",
        language: "typescript",
        code: `// 1. Componente de escucha en el Frontend (AnalyticsTracker.tsx)
'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const trackView = async () => {
      try {
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            url: window.location.origin + pathname + (searchParams?.toString() ? '?' + searchParams.toString() : ''),
            referrer: document.referrer,
            userAgent: navigator.userAgent,
            screenSize: \\\`\\\${window.innerWidth}x\\\${window.innerHeight}\\\`
          }),
          keepalive: true
        })
      } catch (err) {
        // Control de errores silencioso en consola para no irrumpir la experiencia de usuario
        console.debug('Analytics failed silently:', err)
      }
    }
    trackView()
  }, [pathname, searchParams])

  return null
}

// 2. API Route Handler con Geolocalización y Anonimización (route.ts)
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    // Captura de cabeceras geográficas de Vercel CDN
    const country = req.headers.get('x-vercel-ip-country') || 'AR'
    const region = req.headers.get('x-vercel-ip-country-region') || 'Unknown'
    const city = req.headers.get('x-vercel-ip-city') || 'Unknown'
    
    // Anonimización por Hashing de IP (GDPR Compliance)
    const clientIp = req.headers.get('x-forwarded-for') || req.ip || '127.0.0.1'
    const ipHash = crypto
      .createHash('sha256')
      .update(clientIp + process.env.ANALYTICS_SALT)
      .digest('base64')

    // Bypass de RLS mediante Cliente Administrativo en el Servidor
    const supabase = createAdminClient()
    const { error } = await supabase.from('global_visits').insert({
      url: body.url,
      referrer: body.referrer,
      user_agent: body.userAgent,
      screen_size: body.screenSize,
      visitor_hash: ipHash,
      country,
      region,
      city
    })

    if (error) throw error
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Analytics Route Error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}`
      },
      {
        title: "Procesador de Webhooks IPN de Mercado Pago con Transacción Atómica",
        filepath: "app/api/payments/mercadopago/webhook/route.ts",
        description: "Valida de forma asíncrona y segura las notificaciones de Mercado Pago, verifica la firma criptográfica del webhook, consulta el SDK de MP, y actualiza el pedido de manera atómica reduciendo el stock y confirmando la venta mediante un procedimiento almacenado en Supabase (PostgreSQL RPC).",
        language: "typescript",
        code: `import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { verifyMercadoPagoSignature } from '@/lib/mercadopago'

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text()
    const signature = req.headers.get('x-signature')
    
    // Validar firma del webhook para evitar falsificaciones (Anti-Spoofing)
    const isValid = verifyMercadoPagoSignature(rawBody, signature)
    if (!isValid) {
      return new NextResponse('Unauthorized Signature', { status: 401 })
    }

    const body = JSON.parse(rawBody)
    const { action, data } = body

    if (action === 'payment.created' || action === 'payment.updated') {
      const paymentId = data.id
      
      // Consultar estado en Mercado Pago mediante SDK seguro
      const mpResponse = await fetch(\\\`https://api.mercadopago.com/v1/payments/\\\${paymentId}\\\`, {
        headers: { Authorization: \\\`Bearer \\\${process.env.MERCADOPAGO_ACCESS_TOKEN}\\\` }
      })
      const paymentData = await mpResponse.json()
      
      const orderId = paymentData.external_reference
      const status = paymentData.status // approved, pending, rejected, etc.

      if (status === 'approved') {
        const supabase = createAdminClient()
        
        // Ejecución atómica y consistente de la actualización mediante RPC
        const { error } = await supabase.rpc('confirm_payment_and_update_stock', {
          p_order_id: orderId,
          p_payment_id: paymentId.toString(),
          p_payment_status: 'approved'
        })

        if (error) throw error
      }
    }

    return new NextResponse('OK', { status: 200 })
  } catch (error) {
    console.error('Mercado Pago Webhook error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}`
      },
      {
        title: "Integración Logística y Generación de Etiquetas Andreani",
        filepath: "app/api/admin/shipping/andreani/label/route.ts",
        description: "Acción en el panel de administrador que realiza la autenticación OAuth con Andreani, solicita la generación de la guía postal de envío a domicilio usando los datos de compra y dirección, y devuelve el archivo PDF final con el código de barra oficial.",
        language: "typescript",
        code: `import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(req: NextRequest) {
  try {
    const { orderId } = await req.json()
    const supabase = createAdminClient()
    
    // Obtener detalles del pedido y dirección del comprador
    const { data: order, error } = await supabase
      .from('orders')
      .select('*, shipping_address (*)')
      .eq('id', orderId)
      .single()
      
    if (error || !order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }

    // 1. Obtener token de acceso de la API de Andreani
    const tokenResponse = await fetch('https://api.andreani.com/login', {
      method: 'POST',
      headers: {
        'X-API-KEY': process.env.ANDREANI_API_KEY as string,
        'Content-Type': 'application/json'
      }
    })
    const { token } = await tokenResponse.json()

    // 2. Generar el envío en el sistema de Andreani
    const shipmentResponse = await fetch('https://api.andreani.com/v1/envios', {
      method: 'POST',
      headers: {
        'Authorization': \\\`Bearer \\\${token}\\\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contrato: process.env.ANDREANI_CONTRATO_DOMICILIO,
        destinatario: {
          nombreCompleto: order.customer_name,
          email: order.customer_email,
          telefono: order.customer_phone,
          direccion: {
            calle: order.shipping_address.street,
            numero: order.shipping_address.number,
            piso: order.shipping_address.floor || '',
            departamento: order.shipping_address.apartment || '',
            localidad: order.shipping_address.city,
            provincia: order.shipping_address.state,
            codigoPostal: order.shipping_address.postal_code
          }
        },
        bultos: [{ peso: 0.5, volumen: 1 }] // Configuración específica para joyería (peso ligero)
      })
    })

    const shipmentData = await shipmentResponse.json()
    const trackingNumber = shipmentData.numeroTracking

    // 3. Obtener etiqueta PDF con el código de barras oficial
    const labelResponse = await fetch(\\\`https://api.andreani.com/v1/envios/\\\${trackingNumber}/etiqueta\\\`, {
      headers: { 'Authorization': \\\`Bearer \\\${token}\\\` }
    })
    const pdfBuffer = await labelResponse.arrayBuffer()

    // 4. Guardar número de tracking y actualizar orden
    await supabase.from('orders').update({
      shipping_tracking_number: trackingNumber,
      shipping_status: 'ready_to_ship'
    }).eq('id', orderId)

    // Devolver el buffer PDF de etiqueta directamente al administrador
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': \\\`attachment; filename=etiqueta-andreani-\\\${trackingNumber}.pdf\\\`
      }
    })
  } catch (error) {
    console.error('Error generating Andreani label:', error)
    return NextResponse.json({ error: 'Failed to generate shipping label' }, { status: 500 })
  }
}`
      }
    ]
  },
  "five-saint": {
    title: "Five Saint - E-Commerce & Comercial CRM 🛁",
    description: "Ecosistema digital completo construido para Five Saint, que integra un sitio web público de catálogo de productos de alta gama junto con dos portales de administración.",
    content: "Un ecosistema digital completo construido para Five Saint, que integra un sitio web público de catálogo de productos de alta gama (bañeras, spas, equipamiento) junto con dos portales de administración dedicados: uno para la gestión de productos y otro especializado en CRM y ventas (Vendedores).",
    imageUrl: "/images/Five Saint.png",
    images: [
      { url: "/images/Five Saint.png", caption: "Five Saint - Catálogo Público" },
      { url: "/images/admin Vendedor Five Saint.png", caption: "Portal CRM Comercial: Dashboard del Vendedor." },
      { url: "/images/seguimiento cliente Five Saint.png", caption: "CRM Activo: Timeline de seguimiento de cliente en tiempo real." }
    ],
    technologies: ["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase", "Supabase Auth", "Supabase Storage"],
    demoUrl: "#",
    githubUrl: "#",
    status: "En Desarrollo (Lanzamiento en 15 días)",
    problem: "Five Saint requería una solución integral que no solo presentara sus productos de alta gama al consumidor final, sino que también permitiera una gestión centralizada y un CRM especializado para el equipo de ventas, donde se pudiera hacer seguimiento preciso de cada cliente, presupuesto y evento de venta sin mezclar la información entre vendedores.",
    solution: "Se desarrolló una arquitectura escalable dividida en tres áreas: un sitio web público para el consumidor final con SSR/SSG, un portal de administración general para la gestión de catálogo y precios, y un portal comercial (CRM) activo. El CRM incluye un embudo de ventas, timeline de interacción con clientes y trazabilidad de presupuestos en tiempo real.",
    architecture: "El sistema está construido con Next.js 16 usando App Router y Turbopack para el frontend. Los estilos e interfaz utilizan Tailwind CSS nativo, Lucide-React y Framer Motion para animaciones fluidas. La base de datos, backend, autenticación y almacenamiento de imágenes están orquestados con Supabase (PostgreSQL), fuertemente protegidos por políticas de seguridad a nivel de fila (RLS).",
    challenges: "El principal desafío fue crear un control de acceso basado en roles (RBAC) extremadamente seguro mediante RLS en Supabase, para garantizar que cada vendedor solo pueda acceder a sus propios clientes y ventas (y a nadie más), mientras que los administradores tengan una visión global. Además, implementar el tracking en tiempo real de visualización de presupuestos generados en PDF usando eventos disparados desde el frontend y funciones de base de datos.",
    results: "El resultado es un ecosistema digital integrado donde la fuerza de ventas puede generar presupuestos y pedidos con un alto nivel de detalle, saber exactamente cuándo el cliente abre el link del presupuesto (gracias a notificaciones automáticas y actualización del Timeline) y gestionar el ciclo de vida de cada lead mediante un pipeline dinámico y ordenado.",
    businessPotential: [
      {
        title: "Trazabilidad de Visualización en Tiempo Real",
        description: "Cuando un cliente abre el link de un presupuesto, el sistema alerta instantáneamente al vendedor inyectando un evento automático ('budget_viewed') en el Timeline del CRM, actualizando también el contador de visitas."
      },
      {
        title: "Seguridad y Aislamiento por RLS",
        description: "El acceso a la base de datos está fuertemente protegido; es matemáticamente imposible que un vendedor altere o visualice la cartera de clientes de un compañero, gracias a las políticas Row Level Security de Supabase."
      },
      {
        title: "CRM Activo con Embudo de Ventas",
        description: "Los clientes transicionan por los estados del embudo de ventas (Nuevo, Contactado, Presupuestado, etc.), y el dashboard procesa reglas de negocio en tiempo real (ej. alerta si pasaron > 48 horas sin respuesta)."
      }
    ],
    projectStructure: [
      {
        title: "Sitio Web Público (/)",
        description: "Catálogo orientado al consumidor final con diseño premium, animaciones micro-interactivas y renderizado del lado del servidor (SSR / SSG) para SEO."
      },
      {
        title: "Portal de Administración (/admin-FiveSaint)",
        description: "Gestión central del catálogo: Creación, edición y eliminación de categorías, productos y variantes de precios (lista vigente)."
      },
      {
        title: "Portal Comercial (/admin-comercial)",
        description: "Herramienta diaria de ventas con control de acceso, donde se gestionan los clientes, presupuestos y pedidos exclusivos de cada vendedor (Action Center)."
      }
    ],
    keyFeatures: [
      {
        title: "1. Embudo de Ventas (Pipeline) Activo",
        description: "Sistema inteligente para la gestión de clientes en el CRM:",
        items: [
          "Estados automáticos: Seguimiento desde 'Nuevo' hasta 'Ganado/Perdido'.",
          "Alertas de negocio: Detección proactiva de leads estancados o que urgen contactar mostrados en el dashboard del vendedor."
        ]
      },
      {
        title: "2. Trazabilidad y Timeline del Cliente",
        description: "Ficha única y detallada (Detail Client) para registro exhaustivo:",
        items: [
          "Línea de tiempo histórica con todas las interacciones de un cliente.",
          "Diferenciación estricta entre anotaciones manuales del equipo y eventos automáticos generados por el sistema (como envío de cotización o aprobación de pedido)."
        ]
      },
      {
        title: "3. Seguimiento de Presupuestos ('Real-Time Views')",
        description: "Monitorización profunda de la intención de compra del cliente:",
        items: [
          "Generación de links únicos de presupuestos en PDF, con trackers (triggers) integrados que disparan hacia la API (incrementBudgetViewCount).",
          "El vendedor es informado instantáneamente (y de manera invisible para el cliente) cuántas veces y cuándo el comprador miró la propuesta económica."
        ]
      },
      {
        title: "4. Aislamiento y Roles con Row Level Security",
        description: "Capas de seguridad inquebrantables del lado de Supabase:",
        items: [
          "Políticas de acceso donde las llamadas a las tablas 'clients', 'budgets' y 'orders' están atadas a la validación de la sesión ('seller_id' coincidente).",
          "Rol de administrador comercial superpuesto con privilegios de lectura general sobre la actividad de todos los vendedores."
        ]
      }
    ]
  }
}

const getFeatureIcon = (title: string) => {
  if (title.includes("Integración") || title.includes("Mercado Libre") || title.includes("Operación") || title.includes("Dashboard")) {
    return <Cpu className="h-6 w-6 text-blue-500" />
  }
  if (title.includes("Inteligencia") || title.includes("AI") || title.includes("Copiloto")) {
    return <Sparkles className="h-6 w-6 text-purple-500" />
  }
  if (title.includes("Seguridad") || title.includes("Errores") || title.includes("Multi-Tenant") || title.includes("RLS")) {
    return <Shield className="h-6 w-6 text-rose-500" />
  }
  if (title.includes("Inventario") || title.includes("Componentes") || title.includes("Catálogo") || title.includes("BOM") || title.includes("Depósito")) {
    return <Boxes className="h-6 w-6 text-amber-500" />
  }
  if (title.includes("Suscripciones") || title.includes("Facturación") || title.includes("Rentabilidad") || title.includes("Finanzas") || title.includes("P&L")) {
    return <CreditCard className="h-6 w-6 text-emerald-500" />
  }
  if (title.includes("Workers") || title.includes("Queues") || title.includes("Resiliencia") || title.includes("APIs")) {
    return <Clock className="h-6 w-6 text-indigo-500" />
  }
  return <Sparkles className="h-6 w-6 text-primary" />
}

export default async function ProjectDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = projectData[params.slug as keyof typeof projectData]

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl">
      {/* Volver y Acciones */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-6 -ml-4">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Proyectos
          </Link>
        </Button>
        <div className="flex flex-col md:flex-row md:items-start lg:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{project.title}</h1>
              {project.status && (
                <Badge className={`text-xs px-2.5 py-1 font-semibold border rounded-full ${project.status.includes("Producción")
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                    : project.status.includes("Testeo")
                      ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                      : "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20"
                  }`}>
                  <span className={`w-1.5 h-1.5 rounded-full mr-1.5 inline-block ${project.status.includes("Producción")
                      ? "bg-emerald-500 animate-pulse"
                      : project.status.includes("Testeo")
                        ? "bg-amber-500 animate-pulse"
                        : "bg-zinc-500"
                    }`} />
                  {project.status}
                </Badge>
              )}
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0 mt-4 md:mt-0">
            {project.demoUrl && project.demoUrl !== "#" && (
              <Button asChild className="w-full sm:w-auto">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer shadow-md">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Demo
                </a>
              </Button>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <FaGithub className="mr-2 h-4 w-4" />
                  Código Fuente
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map(tech => (
            <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">{tech}</Badge>
          ))}
        </div>
      </div>

      {/* Galería de Imágenes */}
      <div className="mb-16">
        <ProjectGallery
          images={project.images || (project.imageUrl ? [{ url: project.imageUrl, caption: project.title }] : [])}
          title={project.title}
        />
      </div>

      {/* Contenido Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Lado Izquierdo: Caso de Estudio (Problema, Solución, etc.) */}
        <div className="lg:col-span-2 space-y-12">
          {/* Introducción */}
          <section className="bg-muted/10 p-6 rounded-xl border border-border/30">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Resumen Ejecutivo
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.content}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b border-border/30 pb-2">El Problema</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.problem}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b border-border/30 pb-2">La Solución</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.solution}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b border-border/30 pb-2">Arquitectura</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.architecture}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b border-border/30 pb-2">Desafíos Superados</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.challenges}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b border-border/30 pb-2">Resultados</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.results}</p>
          </section>
        </div>

        {/* Lado Derecho: Arquitectura de Negocio y Estructura */}
        <div className="space-y-10 lg:sticky lg:top-24 h-fit">
          {/* Arquitectura de Negocio */}
          {project.businessPotential && (
            <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Arquitectura de Negocio
              </h3>
              <div className="space-y-4">
                {project.businessPotential.map((item, idx) => (
                  <div key={idx} className="border-l-2 border-primary/30 pl-4 py-1">
                    <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Estructura del Código */}
          {project.projectStructure && (
            <div className="bg-muted/30 p-6 rounded-xl border border-border/50">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FolderCode className="h-5 w-5 text-primary" />
                Estructura de Código
              </h3>
              <div className="space-y-3 font-mono text-xs max-h-[380px] overflow-y-auto pr-2">
                {project.projectStructure.map((item, idx) => (
                  <div key={idx} className="group flex flex-col gap-1 pb-2 border-b border-border/10 last:border-0">
                    <span className="font-semibold text-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                      <ChevronRight className="h-3.5 w-3.5 text-zinc-500" />
                      {item.title}
                    </span>
                    {item.description && (
                      <span className="text-[11px] text-zinc-500 pl-4 leading-normal">{item.description}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sección Completa de Capacidades Técnicas (Grid de Tarjetas) */}
      {project.keyFeatures && (
        <div className="mt-20 border-t border-border/30 pt-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Capacidades y Características Técnicas</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Detalles técnicos avanzados implementados para garantizar estabilidad, seguridad operativa y una excelente experiencia de usuario.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.keyFeatures.map((feat) => (
              <div
                key={feat.title}
                className="bg-card hover:bg-muted/20 border border-border/60 hover:border-primary/40 rounded-xl p-6 transition-all duration-300 flex flex-col"
              >
                <div className="mb-4">
                  {getFeatureIcon(feat.title)}
                </div>
                <h3 className="font-bold text-lg mb-2 text-card-foreground">{feat.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{feat.description}</p>
                {feat.items && (
                  <ul className="space-y-3 mt-auto text-xs border-t border-border/20 pt-4">
                    {feat.items.map((item, index) => {
                      const colonIndex = item.indexOf(":")
                      const title = colonIndex !== -1 ? item.substring(0, colonIndex + 1) : ""
                      const desc = colonIndex !== -1 ? item.substring(colonIndex + 1) : item

                      return (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary shrink-0 mt-1 text-[10px]">&bull;</span>
                          <span className="leading-relaxed">
                            {title && (
                              <strong className="font-semibold text-foreground mr-1">
                                {title}
                              </strong>
                            )}
                            {desc}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sección Completa de Code Showcase (Pestañas e Highlighting) */}
      {project.codeShowcases && (
        <div className="mt-20 border-t border-border/30 pt-16">
          <h2 className="text-3xl font-bold mb-4">Detalles e Integraciones Clave</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Explora fragmentos reales de la base de código (simplificados para exposición) que resuelven retos clave de arquitectura, seguridad e integración.
          </p>
          <CodeShowcase snippets={project.codeShowcases} />
        </div>
      )}
    </div>
  )
}
