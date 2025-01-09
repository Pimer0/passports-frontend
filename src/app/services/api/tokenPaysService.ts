import { useRouter } from "next/navigation";

const tokenPaysService = {
    
setToken : (id: number, router: ReturnType<typeof useRouter>) => {
    router.push("/avantages")
    localStorage.setItem('passport', `${id}`)
} 
}

export default tokenPaysService
// Usage example
// const router = useRouter();
// tokenPaysService.setToken(123, router);