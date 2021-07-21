import { TestManager } from "https://deno.land/x/test_manager@v0.8.3/mod.ts";
import { syncTestObjects} from "./sync-test.ts";

const testManager = new TestManager()
syncTestObjects.forEach(
    TO => testManager.runSyncTest(TO)
)
 
testManager.bilan()