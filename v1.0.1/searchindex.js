Search.setIndex({docnames:["cleanlab","cleanlab.models","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,nbsphinx:4,sphinx:56},filenames:["cleanlab.rst","cleanlab.models.rst","index.rst"],objects:{"cleanlab.baseline_methods":[[0,1,1,"","baseline_argmax"],[0,1,1,"","baseline_argmax_calibrated_confusion_matrix"],[0,1,1,"","baseline_argmax_confusion_matrix"]],"cleanlab.classification":[[0,2,1,"","LearningWithNoisyLabels"]],"cleanlab.classification.LearningWithNoisyLabels":[[0,3,1,"","fit"],[0,3,1,"","get_params"],[0,3,1,"","predict"],[0,3,1,"","predict_proba"],[0,3,1,"","score"],[0,3,1,"","set_params"]],"cleanlab.coteaching":[[0,1,1,"","adjust_learning_rate"],[0,1,1,"","evaluate"],[0,1,1,"","forget_rate_scheduler"],[0,1,1,"","initialize_lr_scheduler"],[0,1,1,"","loss_coteaching"],[0,1,1,"","train"]],"cleanlab.latent_algebra":[[0,1,1,"","compute_inv_noise_matrix"],[0,1,1,"","compute_noise_matrix_from_inverse"],[0,1,1,"","compute_ps_py_inv_noise_matrix"],[0,1,1,"","compute_py"],[0,1,1,"","compute_py_inv_noise_matrix"],[0,1,1,"","compute_pyx"]],"cleanlab.latent_estimation":[[0,1,1,"","calibrate_confident_joint"],[0,1,1,"","compute_confident_joint"],[0,1,1,"","converge_estimates"],[0,1,1,"","estimate_confident_joint_and_cv_pred_proba"],[0,1,1,"","estimate_confident_joint_from_probabilities"],[0,1,1,"","estimate_cv_predicted_probabilities"],[0,1,1,"","estimate_joint"],[0,1,1,"","estimate_latent"],[0,1,1,"","estimate_noise_matrices"],[0,1,1,"","estimate_py_and_noise_matrices_from_probabilities"],[0,1,1,"","estimate_py_noise_matrices_and_cv_pred_proba"],[0,1,1,"","num_label_errors"]],"cleanlab.models":[[1,0,0,"-","cifar_cnn"],[1,0,0,"-","mnist_pytorch"]],"cleanlab.models.cifar_cnn":[[1,2,1,"","CNN"],[1,1,1,"","call_bn"]],"cleanlab.models.cifar_cnn.CNN":[[1,4,1,"","T_destination"],[1,3,1,"","__call__"],[1,3,1,"","add_module"],[1,3,1,"","apply"],[1,3,1,"","bfloat16"],[1,3,1,"","buffers"],[1,3,1,"","children"],[1,3,1,"","cpu"],[1,3,1,"","cuda"],[1,3,1,"","double"],[1,4,1,"","dump_patches"],[1,3,1,"","eval"],[1,3,1,"","extra_repr"],[1,3,1,"","float"],[1,3,1,"id0","forward"],[1,3,1,"","get_buffer"],[1,3,1,"","get_extra_state"],[1,3,1,"","get_parameter"],[1,3,1,"","get_submodule"],[1,3,1,"","half"],[1,3,1,"","load_state_dict"],[1,3,1,"","modules"],[1,3,1,"","named_buffers"],[1,3,1,"","named_children"],[1,3,1,"","named_modules"],[1,3,1,"","named_parameters"],[1,3,1,"","parameters"],[1,3,1,"","register_backward_hook"],[1,3,1,"","register_buffer"],[1,3,1,"","register_forward_hook"],[1,3,1,"","register_forward_pre_hook"],[1,3,1,"","register_full_backward_hook"],[1,3,1,"","register_parameter"],[1,3,1,"","requires_grad_"],[1,3,1,"","set_extra_state"],[1,3,1,"","share_memory"],[1,3,1,"","state_dict"],[1,3,1,"","to"],[1,3,1,"","to_empty"],[1,3,1,"","train"],[1,4,1,"","training"],[1,3,1,"","type"],[1,3,1,"","xpu"],[1,3,1,"","zero_grad"]],"cleanlab.models.mnist_pytorch":[[1,2,1,"","CNN"],[1,2,1,"","SimpleNet"],[1,1,1,"","get_mnist_dataset"],[1,1,1,"","get_sklearn_digits_dataset"]],"cleanlab.models.mnist_pytorch.CNN":[[1,4,1,"","batch_size"],[1,4,1,"","dataset"],[1,4,1,"","epochs"],[1,3,1,"id1","fit"],[1,3,1,"","get_params"],[1,4,1,"","loader"],[1,4,1,"","log_interval"],[1,4,1,"","lr"],[1,4,1,"","momentum"],[1,4,1,"","no_cuda"],[1,3,1,"id2","predict"],[1,3,1,"id3","predict_proba"],[1,4,1,"","seed"],[1,3,1,"","set_params"],[1,4,1,"","test_batch_size"]],"cleanlab.models.mnist_pytorch.SimpleNet":[[1,4,1,"","T_destination"],[1,3,1,"","__call__"],[1,3,1,"","add_module"],[1,3,1,"","apply"],[1,3,1,"","bfloat16"],[1,3,1,"","buffers"],[1,3,1,"","children"],[1,3,1,"","cpu"],[1,3,1,"","cuda"],[1,3,1,"","double"],[1,4,1,"","dump_patches"],[1,3,1,"","eval"],[1,3,1,"","extra_repr"],[1,3,1,"","float"],[1,3,1,"","forward"],[1,3,1,"","get_buffer"],[1,3,1,"","get_extra_state"],[1,3,1,"","get_parameter"],[1,3,1,"","get_submodule"],[1,3,1,"","half"],[1,3,1,"","load_state_dict"],[1,3,1,"","modules"],[1,3,1,"","named_buffers"],[1,3,1,"","named_children"],[1,3,1,"","named_modules"],[1,3,1,"","named_parameters"],[1,3,1,"","parameters"],[1,3,1,"","register_backward_hook"],[1,3,1,"","register_buffer"],[1,3,1,"","register_forward_hook"],[1,3,1,"","register_forward_pre_hook"],[1,3,1,"","register_full_backward_hook"],[1,3,1,"","register_parameter"],[1,3,1,"","requires_grad_"],[1,3,1,"","set_extra_state"],[1,3,1,"","share_memory"],[1,3,1,"","state_dict"],[1,3,1,"","to"],[1,3,1,"","to_empty"],[1,3,1,"","train"],[1,4,1,"","training"],[1,3,1,"","type"],[1,3,1,"","xpu"],[1,3,1,"","zero_grad"]],"cleanlab.noise_generation":[[0,1,1,"","generate_n_rand_probabilities_that_sum_to_m"],[0,1,1,"","generate_noise_matrix"],[0,1,1,"","generate_noise_matrix_from_trace"],[0,1,1,"","generate_noisy_labels"],[0,1,1,"","noise_matrix_is_valid"],[0,1,1,"","randomly_distribute_N_balls_into_K_bins"]],"cleanlab.polyplex":[[0,1,1,"","joint_bounds"],[0,1,1,"","joint_min_max"],[0,1,1,"","slope_intercept"]],"cleanlab.pruning":[[0,1,1,"","get_noise_indices"],[0,1,1,"","keep_at_least_n_per_class"],[0,1,1,"","multiclass_crossval_predict"],[0,1,1,"","order_label_errors"],[0,1,1,"","reduce_prune_counts"]],"cleanlab.util":[[0,2,1,"","VersionWarning"],[0,1,1,"","assert_inputs_are_valid"],[0,1,1,"","clip_noise_rates"],[0,1,1,"","clip_values"],[0,1,1,"","confusion_matrix"],[0,1,1,"","estimate_pu_f1"],[0,1,1,"","int2onehot"],[0,1,1,"","onehot2int"],[0,1,1,"","print_inverse_noise_matrix"],[0,1,1,"","print_joint_matrix"],[0,1,1,"","print_noise_matrix"],[0,1,1,"","print_square_matrix"],[0,1,1,"","remove_noise_from_class"],[0,1,1,"","round_preserving_row_totals"],[0,1,1,"","round_preserving_sum"],[0,1,1,"","value_counts"]],"cleanlab.util.VersionWarning":[[0,3,1,"","is_compatible"]],cleanlab:[[0,0,0,"-","baseline_methods"],[0,0,0,"-","classification"],[0,0,0,"-","coteaching"],[0,0,0,"-","latent_algebra"],[0,0,0,"-","latent_estimation"],[0,0,0,"-","noise_generation"],[0,0,0,"-","polyplex"],[0,0,0,"-","pruning"],[0,0,0,"-","util"]]},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"0":[0,1],"001":0,"01":1,"05":0,"05369":0,"0s":0,"1":[0,1],"10":[0,1],"100":0,"10000":0,"100000":0,"1150":1,"1810":0,"1913":1,"1914":1,"1d":0,"1e":0,"1l":1,"1s":0,"2":[0,1],"20":0,"2021":0,"20l":1,"2324":1,"2325":1,"2382":1,"25":1,"250":0,"2d":0,"3":[0,1],"3420":1,"3741":1,"4":0,"4443":1,"47":0,"4d":1,"5":[0,1],"50":1,"5112":1,"5113":1,"5593":1,"5l":1,"6":[0,1],"6122":1,"64":1,"7":0,"8":0,"80":0,"9":0,"99999":0,"boolean":0,"break":1,"class":[0,1],"default":[0,1],"do":[0,1],"final":[0,2],"float":[0,1],"function":[0,1,2],"import":[0,2],"int":[0,1],"new":[0,1],"return":[0,1,2],"short":0,"throw":1,"true":[0,1],"try":0,"while":[0,1],A:[0,1],AND:0,AS:0,At:2,BE:0,Be:1,For:[0,1],If:[0,1],In:[0,1],It:[0,1],Its:1,OF:0,Such:0,That:0,The:[0,1,2],There:0,These:0,To:[0,1,2],__:[0,1],__call__:1,__init__:0,_load_from_state_dict:1,_metadata:1,_python_version_is_compat:0,about:0,abov:[0,1],accept:1,access:1,accord:2,account:0,accur:0,accuraci:0,achiev:[0,1],across:0,actual:0,ad:1,adam:0,adapt:[0,1,2],add:[0,1],add_modul:1,addit:1,addition:0,adher:[0,1],adjust:0,adjust_learning_r:0,affect:1,after:[0,1],afterward:1,again:0,against:1,agre:0,agreement:0,al:0,algorithm:0,alia:1,all:[0,1],allow:[1,2],alongsid:1,alpha_plan:0,alreadi:[0,1,2],also:[0,1],although:1,alwai:[0,1],among:1,amount:0,an:[0,1,2],ani:[0,1,2],anoth:0,any_other_class:0,anywher:0,api:2,appli:1,approach:0,appropri:1,ar:[0,1,2],architectur:1,arg:[0,1],argmax:0,argument:1,around:0,arrai:[0,1],art:0,arxiv:0,ascii:0,assert_inputs_are_valid:0,assign:0,associ:1,assum:0,astyp:0,asynchron:1,attribut:1,attributeerror:1,autograd:1,autom:0,automat:[0,2],avail:0,averag:[0,1],avoid:0,axi:0,backward:1,base:[0,1],baseestim:[0,1],baselin:1,baseline_argmax:0,baseline_argmax_calibrated_confusion_matrix:0,baseline_argmax_confusion_matrix:0,baseline_method:0,basic:1,batch_siz:1,batchnorm:1,bc:1,becaus:0,been:0,befor:[0,1,2],behavior:1,being:[0,1],belong:0,below:[0,1],benchmark:[1,2],best:0,beta1_plan:0,beta:0,better:[0,1],between:[0,1],bfloat16:1,bhanml:1,bia:1,binari:0,bincount:0,blob:1,bn:1,bool:[0,1],both:[0,1],bound:[0,1],boundari:0,buf:1,buffer:1,build:1,bump:1,c:2,caffe2:0,calcul:0,calibr:0,calibrate_confident_joint:0,call:[0,1,2],call_bn:1,callabl:1,caller:1,can:[0,1,2],care:1,cast:1,cat:0,caus:0,cdoubl:1,certain:[0,1],cgdeboer:0,chang:[0,1],channels_last:1,charact:0,character:0,check:[0,1],child:1,children:1,choic:0,choos:0,cifar:1,cifar_cnn:0,cj:0,cj_ish:0,claesen:0,clase:1,class_weight:0,class_without_nois:0,classif:2,classifi:[0,2],cleanlab:0,clf:[0,2],clip:0,clip_noise_r:0,clip_valu:0,close:0,closer:0,cnn:1,cnt:0,co:1,code:[0,1],column:0,com:[0,1,2],combin:0,comment:0,compar:1,comparison:1,compat:1,complet:0,complex128:1,complex:1,compliant:0,compon:[0,1],comptuation:0,comput:[0,1,2],compute_confident_joint:0,compute_inv_noise_matrix:0,compute_noise_matrix_from_invers:0,compute_pi:0,compute_ps_py_inv_noise_matrix:0,compute_py_inv_noise_matrix:0,compute_pyx:0,con:0,conda:2,condit:0,confid:0,confident_bin:0,confident_joint:0,confus:[0,1],confusion_matrix:0,conjunct:0,consid:[0,1],consist:0,construct:1,contain:[0,1],context:1,conv4:1,conv5:1,conv:1,convent:1,converg:0,converge_estim:0,converge_latent_estim:0,convert:[0,1],copi:1,correctli:[0,1],correspond:1,coteach:0,count:0,count_joint:0,cover:0,cpu:[0,1],creat:0,creation:1,cross:[0,2],cross_val_predict:1,crossval:0,cuda:1,current:[0,1],curv:0,custom:1,cutoff:0,cv_n_fold:0,d:0,data:[0,1,2],dataload:0,dataset:[0,1,2],datatyp:1,debug:0,decim:0,decreas:0,deem:2,deep:[0,1],def:[0,1],defin:[0,1],degre:1,denot:0,depend:0,deprec:[0,1],descend:1,descript:0,desir:1,destin:1,detail:[0,1],determin:0,deviat:0,devic:1,diagon:0,diagram:1,dict:[0,1],dictionari:1,differ:[0,1],digit:1,dimension:0,direct:1,directli:2,dirichlet:0,disabl:1,discrep:0,discret:0,displai:0,disribut:0,distinct:0,distribut:[0,1],doc:1,docstr:[0,1],document:1,doe:0,dog:0,done:0,dot:0,doubl:1,download:1,dropout:1,dropout_r:1,dst_type:1,dtype:[0,1],due:0,dump_patch:1,duplic:1,dure:[0,2],e:[0,1],each:[0,1],easi:0,easier:0,easiest:0,easili:0,effect:1,effici:0,eg:0,either:[0,1],element:0,elif:0,els:0,empti:0,enabl:1,encod:0,encount:0,end:0,enforc:[0,1],ensur:[0,1],entir:[0,2],entri:[0,1],enumer:[0,1],epoch:[0,1],epoch_decay_start:0,eqn:0,equival:[0,1],erron:0,error:[0,1],estim:[1,2],estimate_confident_joint_and_cv_pred_proba:0,estimate_confident_joint_from_prob:0,estimate_cv_predicted_prob:0,estimate_joint:0,estimate_lat:0,estimate_noise_matric:0,estimate_pu_f1:0,estimate_py_and_noise_matrices_from_prob:0,estimate_py_noise_matrices_and_cv_pred_proba:0,et:0,eta:0,etc:[0,1],eval:1,evalu:[0,1],even:0,everi:[0,1],everyth:0,exact:0,exactli:[0,1],exampl:[0,1,2],except:0,exist:[0,1],expect:2,explain:0,explan:1,expon:0,extra:1,extra_repr:1,f1:0,fals:[0,1],fast:0,favor:1,featur:0,fewer:0,field:1,file:0,fill_:1,find:0,fine:0,finetun:1,first:0,fit:[0,1,2],five:0,fix:2,flexibl:1,float16:1,float64:1,fn:1,fold:0,follow:[0,1],forc:[0,1],force_p:0,forg:2,forget:0,forget_r:0,forget_rate_schedul:0,form:[0,1],format:[0,1],former:1,formula:0,forward:[0,1],found:[1,2],four:0,frac_nois:0,frac_of_nois:0,frac_zero_noise_r:0,fraction:0,freez:1,from:[0,1,2],fulli:[0,1],functor:0,futur:1,g:[0,1],gan:1,generate_n_rand_probabilities_that_sum_to_m:0,generate_noise_matrix:0,generate_noise_matrix_from_trac:0,generate_noisy_label:0,get:[0,1,2],get_buff:1,get_extra_st:1,get_mnist_dataset:1,get_noise_indic:0,get_param:[0,1],get_paramet:1,get_sklearn_digits_dataset:1,get_submodul:1,git:2,github:[0,1,2],given:[0,1,2],good:[0,1],gpu1:1,gpu:1,grad:1,grad_input:1,grad_output:1,gradient:1,greater:0,guarante:[0,1],guess:0,ha:[0,1,2],had:0,half:1,handl:1,handwritten:1,happen:0,hard:1,have:[0,1],held:2,help:[1,2],helper:0,here:[0,2],hidden:0,high:0,higher:0,holdout:0,hook:1,host:1,hot:0,how:[0,1],howev:0,http:[0,1,2],i:0,ident:0,identifi:[0,2],idx:1,idx_flip:0,ignor:1,ild:0,imagenet:2,immedi:1,implement:[0,1,2],impli:0,imposs:0,in_featur:1,includ:[0,1],inconfid:0,incorrectli:0,increas:0,independ:0,index:0,indic:[0,1,2],individu:1,inform:1,inherit:0,init:1,init_weight:1,initi:1,initialize_lr_schedul:0,inplac:1,input:[0,1,2],input_channel:1,instal:1,instanc:[0,1],instead:[0,1],instruct:2,int2onehot:0,integ:0,integr:1,intercept:0,inv_noise_matrix:0,inv_noise_matrix_iter:0,invalid:1,invers:0,inverse_noise_matrix:0,inverse_noise_rate_class_k:0,invok:1,is_compat:0,issu:[0,2],item:0,iter:[0,1],iteround:0,its:[0,1],itself:1,j:[0,1],jist:0,joint:0,joint_bound:0,joint_estim:0,joint_matrix:0,joint_min_max:0,joint_trace_max:0,joint_trace_min:0,just:0,k:0,k_:0,k_y:0,keep:0,keep_at_least_n_per_class:0,keep_var:1,kei:1,keyword:1,known:0,kwarg:[0,1],l:1,label:[0,1],label_errors_bool:0,label_errors_idx:0,larger:0,last:[0,1],latent_algebra:0,latent_estim:0,latter:[0,1],learn:[0,1],learnabl:0,learningwithnoisylabel:0,least:0,leav:0,left:0,left_nam:0,len:0,length:0,less:0,let:[1,2],librari:1,like:[0,1,2],likelihood:2,line:1,linear:1,linear_model:[0,2],list:[0,1],list_of_compatible_vers:0,littl:0,live:1,lnl:2,load:1,load_state_dict:1,loader:1,local:1,log_interv:1,logist:[0,2],logisticregress:[0,2],logit:0,logreg:0,look:1,loop:0,loss:0,loss_coteach:0,low:0,lr:[0,1],m:[0,1],machin:0,made:0,magnifi:0,mai:[0,1],major:0,make:[0,1,2],manag:0,mani:0,manual:2,map:[0,1],margin:0,marginal_p:0,mask:0,master:1,mat:0,match:[0,1],mathemat:0,matric:0,matrix:0,matter:0,max:0,max_balls_per_bin:0,max_it:0,max_noise_r:0,max_prob:0,max_prob_not_label:0,max_trace_prob:0,maxim:0,maximium:0,maximum:0,mayb:0,mean:[0,1],mechan:1,member:1,memo:1,memori:1,memory_format:1,method:[1,2],metric:0,min:0,min_balls_per_bin:0,min_noise_r:0,min_prob:0,min_trace_prob:0,minimum:[0,2],mislabel:[0,2],miss:1,missing_kei:1,ml:2,mnist:[1,2],mnist_pytorch:0,mode:1,model1:0,model2:0,modifi:[0,1],modul:0,momentum:1,more:[0,1,2],most:0,move:1,ms:0,multi:[0,1],multi_label:0,multiclass:0,multiclass_crossval_predict:0,multipl:0,multipli:0,multiprocess:0,must:[0,1,2],n:[0,1],n_job:0,n_output:1,name:[0,1],named_buff:1,named_children:1,named_modul:1,named_paramet:1,namedtupl:1,natur:0,necessari:0,need:[0,1,2],neg:0,nest:[0,1],net:1,net_b:1,net_c:1,network:[0,1],neural:0,never:[0,2],new_sum:0,nn:[0,1],no_cuda:1,no_grad:1,noise_gener:0,noise_mask:0,noise_matrix:0,noise_matrix_is_valid:0,noise_matrix_iter:0,noise_matrix_trac:0,noise_r:0,noisi:[0,1],non:[0,1],non_block:1,none:[0,1],normal:0,normalized_margin:0,northcutt:0,note:[0,1,2],notion:0,np:0,num_confident_bin:0,num_examples_s_equal_k:0,num_examples_with_s_equal_k:0,num_featur:1,num_gradu:0,num_iter_per_epoch:0,num_label_error:0,num_to_remove_per_class:0,number:[0,1],number_of_mislabeled_examples_in_class_k:0,numer:0,numpi:[0,1],nxk:0,o:[0,1],obj:0,object:[0,1],observ:0,obtain:[0,2],obviou:0,occur:0,off:0,often:0,onc:1,one:[0,1,2],onehot2int:0,onehot:0,onehot_matrix:0,ones:[0,1],onli:[0,1],oper:1,opposit:0,optim:[0,1],optimizer1:0,optimizer2:0,option:[0,1],order:[0,2],order_label_error:0,ordered_label_error:2,ordereddict:1,org:[0,1],origin:0,other:[0,1,2],otherwis:[0,1],out:[0,2],out_featur:1,output:[0,1],over:[0,1],overal:0,overfit:[0,2],overrid:1,overridden:1,own:1,p:0,p_:0,packag:0,pair:0,parallel:0,param:[0,1],paramet:[0,1],parse_arg:0,parser:0,part:1,partial:2,particular:[0,1],pass:[0,1],path:1,pdf:0,per:0,percent:0,perfect:0,perfectli:0,perform:[0,1],persist:1,perturb:0,pickl:1,pickleabl:1,pin:1,pip:2,pipelin:[0,1],place:1,plot:0,point1:0,point2:0,point:[1,2],poor:0,poorer:0,poorli:0,popular:2,posit:[0,1],possibl:[0,1],potenti:[0,2],practic:0,pragma:0,pre:1,precomput:0,pred:0,pred_proba:0,predict:[0,1,2],predict_proba:[0,1],prefix:1,prepend:1,preserv:0,pretti:0,print:[0,1],print_freq:0,print_inverse_noise_matrix:0,print_joint_matrix:0,print_noise_matrix:0,print_square_matrix:0,prior:0,pro:0,prob:0,prob_given_label:[0,2],prob_label:0,prob_s_eq_1:0,probabilti:0,probabl:[0,1,2],problem:0,process:0,produc:0,proper:0,provid:[0,1,2],proxi:0,prune:2,prune_by_class:0,prune_by_noise_r:0,prune_count_matrix:0,prune_counts_matrix:0,prune_method:0,ps:0,pseudocod:0,psx:[0,2],pu:0,pulearn:0,py:[0,1],py_method:0,python:0,pytorch:[0,1],pyx:[0,2],qualifi:1,queri:1,quickli:0,rais:1,randint:0,random:0,randomli:0,randomly_distribute_n_balls_into_k_bin:0,rang:0,rate:0,rate_schedul:0,ratio:0,re:[0,1],reach:0,reason:[0,1],receiv:1,recip:1,recomput:0,record:1,recurs:1,reduc:[0,2],reduce_prune_count:0,refer:[0,1],referenc:1,reflect:[0,2],regard:0,regist:1,register_backward_hook:1,register_buff:1,register_forward_hook:1,register_forward_pre_hook:1,register_full_backward_hook:1,register_paramet:1,regress:[0,2],rel:0,relat:0,reliabl:2,remov:[0,1,2],removablehandl:1,remove_dupl:1,remove_noise_from_class:0,repeat:0,repeatedli:0,replac:0,repres:0,represent:[0,1],represt:0,requir:[0,1],requires_grad:1,requires_grad_:1,resolv:1,respect:1,rest:0,result:[0,1],retain:0,return_count:0,return_indices_of_off_diagon:0,return_list_of_converging_cj_matric:0,robust:0,roc:0,round:0,round_plac:0,round_preserving_row_tot:0,round_preserving_sum:0,row:0,rp:0,run:1,running_mean:1,running_var:1,runtim:1,runtimeerror:1,s:[0,1,2],s_label:0,sai:1,same:[0,1,2],sampl:[0,2],sample_weight:[0,1],satisfi:0,save:1,schedul:0,scikit:1,score:[0,2],see:[0,1],seed:[0,1],self:[0,1],sequenti:1,serial:1,set:[0,1,2],set_extra_st:1,set_param:[0,1],set_to_non:1,sever:1,sgd:0,shall:1,shape:0,share_memori:1,share_memory_:1,short_titl:0,should:[0,1,2],show:[0,1],shown:1,signatur:1,silent:1,similar:[0,1],similarli:1,simpl:[0,1],simplenet:1,simplest:0,simplif:0,simplifi:0,sinc:1,singl:[0,1],single_label:0,size:1,sklearn:[0,1,2],sklearn_digits_test_s:1,skorch:0,slope:0,slope_intercept:0,slow:0,small:0,smaller:0,smallest:0,so:[0,1,2],some:[0,1,2],someth:1,somtim:0,sort:0,sorted_index_method:[0,2],sourc:[0,1,2],specifi:[0,1],speed:0,split:0,squar:0,start:[1,2],state:[0,1],state_dict:1,statement:0,still:1,stochast:0,storag:1,store:[0,1],str:[0,1],strict:1,strictli:1,string:[0,1],subclass:1,subfield:0,submodul:0,subobject:[0,1],subsequ:1,subset:0,subtract:0,sum:0,supervis:0,support:1,sure:0,t:[0,1],t_destin:1,take:1,target:[0,1],teach:1,technic:1,tell:[0,2],templat:[0,1],tend:0,tensor:[0,1],tensorflow:0,term:0,test:[0,1],test_batch_s:1,test_load:0,test_set:1,than:0,thei:[0,1],them:[0,1],thi:[0,1,2],thing:1,those:0,thousand:2,thread:0,three:0,threshold:0,thu:1,tild:0,time:[0,1],timeit:0,titl:0,to_empti:1,togeth:0,too:0,top1:0,top5:0,top:0,top_bn:1,top_nam:0,topk:0,torch:[0,1],total:0,trace:0,tractabl:0,tradition:0,train:[0,1],train_idx:1,train_label:1,train_load:[0,1],transit:1,transpos:0,tri:[0,1],truth:0,tupl:[0,1],two:[0,1,2],type:[0,1],typevar:1,typic:1,uncertainti:0,unchang:1,under:[0,1],understand:0,unexpect:1,unexpected_kei:1,uniform:0,uniformli:0,union:1,uniqu:0,unknown:0,unlabel:0,unless:1,unlik:0,unsuit:2,until:0,up:0,updat:[0,1],us:[0,1],user:[0,1],util:1,valid:[0,2],valid_noise_matrix:0,valu:[0,1],value_count:0,variabl:0,ve:2,vector:0,verbos:0,versa:0,version:[0,1],versionwarn:0,versu:0,via:[1,2],vice:0,view:1,w:0,wa:0,wai:0,warn:0,warning_already_issu:0,warning_str:0,we:[0,1,2],weak:0,weight:[0,1],well:[0,1],were:[0,1,2],what:0,when:[0,1,2],where:[0,2],whether:[0,1],which:[0,1,2],whole:1,whose:1,why:0,window:0,within:[0,1],without:[0,1],won:1,word:0,work:[0,1,2],would:[0,1,2],wrap:[0,1],wrapper:0,x:[0,1,2],x_test:0,x_train:0,xpu:1,y:[0,1,2],y_1:0,y_2:0,y_count:0,y_max:0,y_may_have_label_error:0,y_min:0,yield:[0,1],you:[0,1,2],your:[0,1,2],yourmodel:0,zero:[0,1],zero_grad:1},titles:["Classification","cleanlab.models package","Introduction"],titleterms:{"1":2,"2":2,"3":2,algebra:0,baselin:0,cifar_cnn:1,classif:0,cleanlab:[1,2],co:0,error:2,estim:0,find:2,gener:0,get_noise_indic:2,instal:2,introduct:2,label:2,latent:0,learningwithnoisylabel:2,method:0,mnist_pytorch:1,model:[0,1,2],modul:1,nois:0,noisi:2,packag:1,polyplex:0,prune:0,quickstart:2,robust:2,submodul:1,teach:0,train:2,us:2,util:0}})