import { motion } from 'framer-motion';

export const SingleAgentBottleneck = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded-xl p-8 shadow-sm relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-4 opacity-[0.03] font-mono text-[8rem] font-bold select-none leading-none">
        AI
      </div>
      
      <h3 className="text-xl font-semibold mb-4 text-foreground">The Single-Agent Bottleneck</h3>
      
      <p className="text-muted-foreground mb-6">
        Single LLMs struggle with multi-step reasoning in high-stakes environments. They hallucinate because they lack a verification loop.
      </p>
      
      <div className="space-y-4">
        {/* Standard AI */}
        <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg border border-border">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-mono text-xs shrink-0">
            1
          </div>
          <div>
            <p className="font-medium text-sm text-foreground">Standard AI</p>
            <p className="text-xs text-muted-foreground">Prompt → Prediction → Output (No review)</p>
          </div>
        </div>
        
        {/* ColleaiQ MAS */}
        <div className="flex items-center gap-4 p-3 bg-sage/10 rounded-lg border border-sage/20">
          <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center text-sage-foreground font-mono text-xs font-bold shrink-0">
            M
          </div>
          <div>
            <p className="font-medium text-sm text-sage-foreground">ColleaiQ MAS</p>
            <p className="text-xs text-sage/80">Plan → Execute → Verify → Report</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleAgentBottleneck;
