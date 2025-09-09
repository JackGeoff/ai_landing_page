"use client"

import type React from "react"
import { Suspense, lazy, useState, useEffect } from "react"

const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
  scene: string
  className?: string
}

function detectWebGLCapabilities(): { supported: boolean; reason?: string } {
  try {
    const canvas = document.createElement("canvas")
    const gl = (canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null

    if (!gl) {
      return { supported: false, reason: "No WebGL context available" }
    }

    const requiredFunctions = ["clearBufferfv", "drawElementsInstanced", "vertexAttribDivisor"]
    for (const func of requiredFunctions) {
      if (typeof (gl as any)[func] !== "function") {
        return { supported: false, reason: `Missing required function: ${func}` }
      }
    }

    const renderer = gl.getParameter(gl.RENDERER) || ""
    const vendor = gl.getParameter(gl.VENDOR) || ""

    if (renderer.includes("Intel") && renderer.includes("HD Graphics")) {
      return { supported: false, reason: "Intel HD Graphics compatibility issues" }
    }

    const testShader = gl.createShader(gl.VERTEX_SHADER)
    if (!testShader) {
      return { supported: false, reason: "Cannot create shaders" }
    }

    gl.deleteShader(testShader)
    return { supported: true }
  } catch (e) {
    const error = e as Error
    return { supported: false, reason: `WebGL test failed: ${error.message}` }
  }
}

function SplineFallback({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,119,198,0.2),transparent_50%)]" />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center space-y-4 p-8">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white">AI-Powered Solutions</h3>
          <p className="text-gray-300 text-sm max-w-xs">Advanced automation and intelligence for your business</p>
        </div>
      </div>
    </div>
  )
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [webglCapabilities, setWebglCapabilities] = useState<{ supported: boolean; reason?: string } | null>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const capabilities = detectWebGLCapabilities()
    setWebglCapabilities(capabilities)

    if (!capabilities.supported) {
      console.log("[v0] WebGL not supported:", capabilities.reason)
    }
  }, [])

  if (!webglCapabilities?.supported || hasError) {
    return <SplineFallback className={className} />
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-black/5 rounded-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      }
    >
      <ErrorBoundary fallback={<SplineFallback className={className} />} onError={() => setHasError(true)}>
        <SplineWrapper scene={scene} className={className} onError={() => setHasError(true)} />
      </ErrorBoundary>
    </Suspense>
  )
}

function SplineWrapper({ scene, className, onError }: { scene: string; className?: string; onError: () => void }) {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (
        event.message?.includes("clearBufferfv") ||
        event.message?.includes("WebGL") ||
        event.message?.includes("@splinetool")
      ) {
        console.log("[v0] Spline runtime error caught:", event.message)
        onError()
      }
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.message?.includes("WebGL") || event.reason?.message?.includes("@splinetool")) {
        console.log("[v0] Spline promise rejection caught:", event.reason)
        onError()
      }
    }

    window.addEventListener("error", handleError)
    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    return () => {
      window.removeEventListener("error", handleError)
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [onError])

  return <Spline scene={scene} className={className} />
}

function ErrorBoundary({
  children,
  fallback,
  onError,
}: {
  children: React.ReactNode
  fallback: React.ReactNode
  onError?: () => void
}) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (hasError && onError) {
      onError()
    }
  }, [hasError, onError])

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      if (
        error.message?.includes("WebGL") ||
        error.message?.includes("clearBufferfv") ||
        error.message?.includes("@splinetool")
      ) {
        console.log("[v0] Error boundary caught:", error.message)
        setHasError(true)
      }
    }

    window.addEventListener("error", handleError)
    return () => window.removeEventListener("error", handleError)
  }, [])

  if (hasError) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
