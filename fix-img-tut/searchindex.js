Search.setIndex({docnames:["cleanlab/classification","cleanlab/coteaching","cleanlab/count","cleanlab/example_models/cifar_cnn","cleanlab/example_models/index","cleanlab/example_models/mnist_pytorch","cleanlab/filter","cleanlab/internal/index","cleanlab/internal/latent_algebra","cleanlab/internal/util","cleanlab/noise_generation","cleanlab/rank","index","notebooks/Image_Tut"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,nbsphinx:4,sphinx:56},filenames:["cleanlab/classification.rst","cleanlab/coteaching.rst","cleanlab/count.rst","cleanlab/example_models/cifar_cnn.rst","cleanlab/example_models/index.rst","cleanlab/example_models/mnist_pytorch.rst","cleanlab/filter.rst","cleanlab/internal/index.rst","cleanlab/internal/latent_algebra.rst","cleanlab/internal/util.rst","cleanlab/noise_generation.rst","cleanlab/rank.rst","index.rst","notebooks/Image_Tut.ipynb"],objects:{"cleanlab.classification":[[0,1,1,"","LearningWithNoisyLabels"]],"cleanlab.classification.LearningWithNoisyLabels":[[0,2,1,"","fit"],[0,2,1,"","get_label_issues"],[0,2,1,"","get_params"],[0,2,1,"","predict"],[0,2,1,"","predict_proba"],[0,2,1,"","score"],[0,2,1,"","set_params"]],"cleanlab.coteaching":[[1,3,1,"","adjust_learning_rate"],[1,3,1,"","evaluate"],[1,3,1,"","forget_rate_scheduler"],[1,3,1,"","initialize_lr_scheduler"],[1,3,1,"","loss_coteaching"],[1,3,1,"","train"]],"cleanlab.count":[[2,3,1,"","calibrate_confident_joint"],[2,3,1,"","compute_confident_joint"],[2,3,1,"","converge_estimates"],[2,3,1,"","estimate_confident_joint_and_cv_pred_proba"],[2,3,1,"","estimate_cv_predicted_probabilities"],[2,3,1,"","estimate_joint"],[2,3,1,"","estimate_latent"],[2,3,1,"","estimate_noise_matrices"],[2,3,1,"","estimate_py_and_noise_matrices_from_probabilities"],[2,3,1,"","estimate_py_noise_matrices_and_cv_pred_proba"],[2,3,1,"","num_label_issues"]],"cleanlab.example_models":[[3,0,0,"-","cifar_cnn"],[5,0,0,"-","mnist_pytorch"]],"cleanlab.example_models.cifar_cnn":[[3,1,1,"","CNN"],[3,3,1,"","call_bn"]],"cleanlab.example_models.cifar_cnn.CNN":[[3,4,1,"","T_destination"],[3,2,1,"","__call__"],[3,2,1,"","add_module"],[3,2,1,"","apply"],[3,2,1,"","bfloat16"],[3,2,1,"","buffers"],[3,2,1,"","children"],[3,2,1,"","cpu"],[3,2,1,"","cuda"],[3,2,1,"","double"],[3,4,1,"","dump_patches"],[3,2,1,"","eval"],[3,2,1,"","extra_repr"],[3,2,1,"","float"],[3,2,1,"id0","forward"],[3,2,1,"","get_buffer"],[3,2,1,"","get_extra_state"],[3,2,1,"","get_parameter"],[3,2,1,"","get_submodule"],[3,2,1,"","half"],[3,2,1,"","load_state_dict"],[3,2,1,"","modules"],[3,2,1,"","named_buffers"],[3,2,1,"","named_children"],[3,2,1,"","named_modules"],[3,2,1,"","named_parameters"],[3,2,1,"","parameters"],[3,2,1,"","register_backward_hook"],[3,2,1,"","register_buffer"],[3,2,1,"","register_forward_hook"],[3,2,1,"","register_forward_pre_hook"],[3,2,1,"","register_full_backward_hook"],[3,2,1,"","register_parameter"],[3,2,1,"","requires_grad_"],[3,2,1,"","set_extra_state"],[3,2,1,"","share_memory"],[3,2,1,"","state_dict"],[3,2,1,"","to"],[3,2,1,"","to_empty"],[3,2,1,"","train"],[3,4,1,"","training"],[3,2,1,"","type"],[3,2,1,"","xpu"],[3,2,1,"","zero_grad"]],"cleanlab.example_models.mnist_pytorch":[[5,1,1,"","CNN"],[5,1,1,"","SimpleNet"],[5,3,1,"","get_mnist_dataset"],[5,3,1,"","get_sklearn_digits_dataset"]],"cleanlab.example_models.mnist_pytorch.CNN":[[5,4,1,"","batch_size"],[5,4,1,"","dataset"],[5,4,1,"","epochs"],[5,2,1,"id0","fit"],[5,2,1,"","get_params"],[5,4,1,"","loader"],[5,4,1,"","log_interval"],[5,4,1,"","lr"],[5,4,1,"","momentum"],[5,4,1,"","no_cuda"],[5,2,1,"id1","predict"],[5,2,1,"id2","predict_proba"],[5,4,1,"","seed"],[5,2,1,"","set_params"],[5,4,1,"","test_batch_size"]],"cleanlab.example_models.mnist_pytorch.SimpleNet":[[5,4,1,"","T_destination"],[5,2,1,"","__call__"],[5,2,1,"","add_module"],[5,2,1,"","apply"],[5,2,1,"","bfloat16"],[5,2,1,"","buffers"],[5,2,1,"","children"],[5,2,1,"","cpu"],[5,2,1,"","cuda"],[5,2,1,"","double"],[5,4,1,"","dump_patches"],[5,2,1,"","eval"],[5,2,1,"","extra_repr"],[5,2,1,"","float"],[5,2,1,"","forward"],[5,2,1,"","get_buffer"],[5,2,1,"","get_extra_state"],[5,2,1,"","get_parameter"],[5,2,1,"","get_submodule"],[5,2,1,"","half"],[5,2,1,"","load_state_dict"],[5,2,1,"","modules"],[5,2,1,"","named_buffers"],[5,2,1,"","named_children"],[5,2,1,"","named_modules"],[5,2,1,"","named_parameters"],[5,2,1,"","parameters"],[5,2,1,"","register_backward_hook"],[5,2,1,"","register_buffer"],[5,2,1,"","register_forward_hook"],[5,2,1,"","register_forward_pre_hook"],[5,2,1,"","register_full_backward_hook"],[5,2,1,"","register_parameter"],[5,2,1,"","requires_grad_"],[5,2,1,"","set_extra_state"],[5,2,1,"","share_memory"],[5,2,1,"","state_dict"],[5,2,1,"","to"],[5,2,1,"","to_empty"],[5,2,1,"","train"],[5,4,1,"","training"],[5,2,1,"","type"],[5,2,1,"","xpu"],[5,2,1,"","zero_grad"]],"cleanlab.filter":[[6,3,1,"","find_label_issues"],[6,3,1,"","find_label_issues_using_argmax_confusion_matrix"],[6,3,1,"","find_predicted_neq_given"],[6,3,1,"","keep_at_least_n_per_class"],[6,3,1,"","multiclass_crossval_predict"],[6,3,1,"","reduce_prune_counts"]],"cleanlab.noise_generation":[[10,3,1,"","generate_n_rand_probabilities_that_sum_to_m"],[10,3,1,"","generate_noise_matrix"],[10,3,1,"","generate_noise_matrix_from_trace"],[10,3,1,"","generate_noisy_labels"],[10,3,1,"","noise_matrix_is_valid"],[10,3,1,"","randomly_distribute_N_balls_into_K_bins"]],"cleanlab.rank":[[11,3,1,"","get_normalized_margin_for_each_label"],[11,3,1,"","get_self_confidence_for_each_label"],[11,3,1,"","order_label_issues"]],"cleanlab.utils":[[8,0,0,"-","latent_algebra"],[9,0,0,"-","util"]],"cleanlab.utils.latent_algebra":[[8,3,1,"","compute_inv_noise_matrix"],[8,3,1,"","compute_noise_matrix_from_inverse"],[8,3,1,"","compute_ps_py_inv_noise_matrix"],[8,3,1,"","compute_py"],[8,3,1,"","compute_py_inv_noise_matrix"],[8,3,1,"","compute_pyx"]],"cleanlab.utils.util":[[9,1,1,"","VersionWarning"],[9,3,1,"","assert_inputs_are_valid"],[9,3,1,"","clip_noise_rates"],[9,3,1,"","clip_values"],[9,3,1,"","confusion_matrix"],[9,3,1,"","estimate_pu_f1"],[9,3,1,"","int2onehot"],[9,3,1,"","onehot2int"],[9,3,1,"","print_inverse_noise_matrix"],[9,3,1,"","print_joint_matrix"],[9,3,1,"","print_noise_matrix"],[9,3,1,"","print_square_matrix"],[9,3,1,"","remove_noise_from_class"],[9,3,1,"","round_preserving_row_totals"],[9,3,1,"","round_preserving_sum"],[9,3,1,"","value_counts"]],"cleanlab.utils.util.VersionWarning":[[9,2,1,"","is_compatible"]],cleanlab:[[0,0,0,"-","classification"],[1,0,0,"-","coteaching"],[2,0,0,"-","count"],[6,0,0,"-","filter"],[10,0,0,"-","noise_generation"],[11,0,0,"-","rank"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"0":[0,1,2,3,5,6,8,9,10,11,13],"000":13,"001":1,"01":5,"03":6,"05":10,"05369":11,"0s":9,"1":[0,1,2,3,5,6,8,9,10,11],"10":[2,3,13],"100":[2,9],"10000":10,"100000":9,"11":13,"1150":[3,5],"12":13,"1213":13,"1215":13,"1216":13,"1222":13,"1225":13,"1228":13,"1233":13,"1234":13,"1235":13,"1238":13,"1239":13,"1247":13,"1249":13,"1252":13,"1253":13,"1256":13,"1258":13,"1260":13,"1261":13,"1267":13,"12679":13,"1268":13,"1273":13,"128":13,"1282":13,"1284":13,"1333":13,"1352":13,"1378":13,"1417":13,"1418":13,"15":13,"15942":13,"1608":13,"1810":11,"18598":13,"1913":[3,5],"1914":[3,5],"1d":[9,13],"1e":[2,10],"1l":[3,5],"1s":9,"2":[0,1,2,3,5,6,8,9,11],"20":2,"2018":6,"2021":0,"20820":13,"20l":[3,5],"2324":[3,5],"2325":[3,5],"2382":[3,5],"24798":13,"25":3,"250":1,"255":13,"2574":13,"2601":13,"28":13,"2925":13,"2d":[0,2,6,9,13],"3":[0,2,3,5,6,8,9,11],"31134":13,"3420":[3,5],"3741":[3,5],"3858":13,"3910":13,"39457":13,"4":[0,6],"4016":13,"4070":13,"4160":13,"4218":13,"4247":13,"4321":13,"4443":[3,5],"4466":13,"4482":13,"4510":13,"47":9,"4735":13,"4766":13,"4782":13,"4783":13,"4804":13,"4931":13,"4951":13,"4971":13,"4d":[3,5],"5":[0,2,5,6],"50":5,"5080":13,"5112":[3,5],"5113":[3,5],"5129":13,"5184":13,"5187":13,"5233":13,"5238":13,"53216":13,"5407":13,"5491":13,"5515":13,"5529":13,"5544":13,"55739":13,"5593":[3,5],"5697":13,"5724":13,"5759":13,"5888":13,"5906":13,"5907":13,"5915":13,"59915":13,"5l":[3,5],"6":[2,5,9],"6122":[3,5],"61247":13,"6150":13,"6161":13,"61790":13,"64":5,"6456":13,"6490":13,"66091":13,"6721":13,"6985":13,"7":9,"70":13,"7010":13,"7043":13,"7271":13,"7307":13,"7333":13,"7358":13,"7535":13,"7603":13,"7605":13,"7976":13,"8":[2,13],"80":1,"8082":13,"8142":13,"8301":13,"8384":13,"8428":13,"8469":13,"8538":13,"8575":13,"8595":13,"8652":13,"8663":13,"8711":13,"8713":13,"8729":13,"8751":13,"8759":13,"8787":13,"8809":13,"8822":13,"8828":13,"8869":13,"8872":13,"8873":13,"8913":13,"8930":13,"8938":13,"8944":13,"8967":13,"8994":13,"9":[9,13],"9228":13,"9336":13,"9457":13,"9585":13,"9754":13,"9788":13,"9901":13,"99999":10,"boolean":6,"break":[3,5],"case":13,"class":[0,1,2,3,5,6,8,9,10,11],"default":[0,1,2,3,5,6,8,10],"do":[2,3,5,9,10,11,13],"final":12,"float":[1,2,3,5,6,9,10,11],"function":[0,1,2,3,5,6,8,9,10,11,12,13],"import":[0,2,12,13],"int":[0,1,2,3,5,6,9,10,11],"new":[0,3,5,13],"return":[0,2,3,5,6,8,9,10,11,12,13],"short":9,"throw":[3,5],"true":[0,1,2,3,5,6,8,9,10,11],"try":[6,11],"while":[0,2,3,5,6,9],A:[0,1,2,3,5,6,8,9,10,11],AND:[0,6,11],As:13,At:12,BE:9,Be:5,By:6,For:[2,3,5,6,8],If:[0,2,3,5,6,8,10,11,13],In:[2,3,5,10],It:[0,3,5,8],Its:[3,5],Such:2,That:6,The:[0,2,3,5,6,8,9,10,11,12],There:[0,2],These:[0,6,7],To:[3,5,12],With:13,__:[0,5],__call__:[3,5],__init__:[0,1],_load_from_state_dict:[3,5],_metadata:[3,5],_python_version_is_compat:9,about:1,abov:[3,5,9,13],accept:[3,5],access:[3,5],accessor:0,accord:12,accordingli:13,accur:[2,6],accuraci:[0,1],achiev:[0,3,5,10],across:[0,2],actual:2,ad:[3,5],adam:1,adapt:[3,9,12,13],add:[2,3,5],add_modul:[3,5],addit:[3,5],addition:10,adher:[0,5],adjust:[1,6],adjust_learning_r:1,advanc:[6,7],affect:[3,5],after:[3,5,6,9],afterward:[3,5],again:2,against:[3,5],agre:2,agreement:2,al:0,algorithm:[0,10],alia:[3,5],all:[2,3,5,6,8,9,10,13],allow:[3,5,12],alongsid:[3,5],alpha_plan:1,alreadi:[3,5,8,12],also:[2,3,5,6,10,13],although:[3,5],alwai:[3,5],among:5,amount:[2,6,10],an:[0,2,3,5,6,8,9,11,12,13],ani:[0,2,3,5,6,9,10,12,13],anoth:[2,11],any_other_class:9,anywher:6,api:12,appli:[3,5],approach:6,appropri:[3,5],ar:[0,2,3,5,6,7,8,9,10,12,13],arbitrari:13,architectur:[3,5],aren:11,arg:[0,1,3,5],argmax:[0,2,6,11],argsort:11,argument:[3,5],around:0,arrai:[0,1,2,5,6,8,9,10,11,13],art:0,articl:6,arxiv:11,ascii:0,assert_inputs_are_valid:9,assign:[10,13],associ:[3,5,11],assum:[0,2,8,9,10,11],astyp:[10,13],asynchron:[3,5],attribut:[3,5],attributeerror:[3,5],augment:13,autograd:[3,5],autom:0,automat:[0,12],averag:[2,3,5,10],avoid:9,axi:[2,8,13],backward:[3,5],base:[0,2,3,5,6,8,9],baseestim:[0,5],baselin:[2,3,6],basic:5,batch_siz:5,batchnorm:[3,5],bc:[3,5],becaus:[2,6,8,9],been:[0,2,6,8,11],befor:[3,5,10,12],behavior:[3,5],being:[0,3,5,6,11],belong:[0,2,6,8,11],below:[2,3,5,6,10],benchmark:[3,12],best:9,beta1_plan:1,beta:1,better:[3,5,10],between:[0,1,2,3,5,6,7,10,11],bfloat16:[3,5],bhanml:3,bia:[3,5],binari:9,bincount:[2,9],blob:3,bn:3,bool:[0,2,3,5,6,9,10,11],both:[0,2,3,5,6,11],bound:[2,3,5],boundari:6,bring:13,buf:[3,5],buffer:[3,5],build:[3,5,13],bump:[3,5],byod:13,c:12,caffe2:0,calcul:2,calibr:[2,6],calibrate_confident_joint:2,call:[2,3,5,6,9,12],call_bn:3,callabl:[3,5],caller:[3,5],can:[2,3,5,6,11,12,13],canon:2,care:[3,5],cast:[3,5],cat:9,caus:[0,6],cdoubl:[3,5],certain:[0,2,3,5],cgdeboer:9,chang:[2,3,5,6,13],channels_last:[3,5],charact:9,check:[3,5,9,13],child:[3,5],children:[3,5],choic:10,choos:[9,11],cifar:4,cifar_cnn:3,cj:[2,8,9],cj_ish:2,cl_off_diag:6,claesen:9,class_weight:1,class_without_nois:9,classif:[2,6,12],classifi:[0,2,9,12],clean:[0,11,13],cleanlab:[0,1,2,3,5,6,7,8,9,10,11],clf:[0,2,12],click:13,clip:9,clip_noise_r:9,clip_valu:9,close:[0,2],cmap:13,cnn:[4,5],cnt:[2,8],co:[1,3],code:[3,5,6,8,9,13],column:[0,2,6,8,9,10,11],com:[3,9,12],combin:2,comment:2,compar:[3,5],comparison:[3,5],compat:[3,5],complet:[2,13],complex128:[3,5],complex:[3,5],compliant:0,compon:[0,5],comptuation:0,comput:[0,1,2,3,5,6,8,9,11,12],compute_confident_joint:[2,6,9],compute_inv_noise_matrix:8,compute_noise_matrix_from_invers:8,compute_pi:8,compute_ps_py_inv_noise_matrix:8,compute_py_inv_noise_matrix:8,compute_pyx:8,con:2,conda:12,condit:[0,2,6,8,9,10],confid:[0,2,6,8,11],confident_bin:2,confident_joint:[2,6,9],confident_learn:[0,6],confus:[3,5,6,9],confusion_matrix:9,congratul:13,conjunct:[0,6],consid:[0,2,3,5,6,13],consist:[0,2,9],constrain:2,construct:[3,5],contain:[0,1,2,3,5,6,8,9,10,11,13],context:[3,5],continu:6,conv4:[3,5],conv5:[3,5],conv:[3,5],conveni:13,convent:[3,5],converg:2,converge_estim:2,converge_latent_estim:[0,2],convert:[3,5,9],copi:[3,5],correct:6,correctli:[0,2,3,5,6,8,9,11],correspond:[0,2,3,5,6,8,11],count:[0,6,8,9,13],count_joint:10,cover:[2,10],cpu:[0,3,5,6],creat:[6,10],creation:5,cross:[0,2,6,8,11,12,13],cross_val_predict:[5,13],cuda:[3,5],current:[0,2,3,5],curv:6,custom:[3,5],cutoff:0,cv:13,cv_n_fold:[0,2],d:[0,2,13],data:[0,1,2,5,11,12,13],dataload:1,dataset:[0,2,5,6,8,9,11,12],datatyp:[3,5],debug:10,decid:13,decim:[1,9],decreas:2,deem:12,deep:[0,5],def:[0,3,5,13],defin:[0,1,2,3,5,6],degre:[3,5],demonstr:13,denot:[0,9],depend:[2,9],deprec:[3,5,10],descend:[3,5],descript:9,desir:[3,5],destin:[3,5],detail:[3,5,9],determin:[0,6],develop:7,deviat:2,devic:[3,5],diagon:[0,2,6,8,9,10],diagram:[3,5],dict:[0,3,5],dictionari:[3,5],differ:[0,2,3,5,6,7],digit:[5,13],dim:13,dimension:9,direct:[3,5],directli:12,dirichlet:10,dirti:11,disabl:[3,5],discrep:2,discret:[0,2,6,8,9,11],displai:[9,13],distinct:[9,10],distribut:[2,5,6],doc:[3,5],docstr:[2,3,5,9],document:[3,5],doe:[0,6,10],dog:9,don:2,done:2,dot:8,doubl:[3,5],download:5,dr:2,dropout:[3,5,13],dropout_r:3,dst_type:[3,5],dtype:[2,3,5],due:2,dump_patch:[3,5],duplic:[3,5],dur:13,dure:[0,12],e:[0,2,3,5,6,8,9,10,11],each:[0,1,2,3,5,6,8,9,10,11],easi:8,easier:[2,10],easiest:0,easili:[8,13],edg:13,effect:[3,5],effici:[2,8],either:[3,5,6,11],element:[2,9],elif:2,els:0,empti:8,enabl:5,encod:[0,6,9],encount:6,end:2,enforc:[0,3,5],ensur:[3,5,6],entir:[6,8,11,12,13],entri:[2,3,5,6,9,10],enumer:[2,3,5,13],epoch:[1,5,13],epoch_decay_start:1,eqn:[2,8,11],equival:[0,2,3,5,6],erron:[0,2,6,8,9,11],error:[0,2,3,5,6,11],estim:[0,2,5,6,8,9,12],estimate_confident_joint_and_cv_pred_proba:2,estimate_cv_predicted_prob:2,estimate_joint:2,estimate_lat:2,estimate_noise_matric:2,estimate_pu_f1:9,estimate_py_and_noise_matrices_from_prob:2,estimate_py_noise_matrices_and_cv_pred_proba:2,et:0,etc:[0,3,5],eval:[3,5],evalu:[1,3,5],even:[2,8],everi:[0,2,3,5,6,8,9,10,11],everyth:0,exact:2,exactli:[3,5,6,10],exampl:[0,1,2,3,5,6,8,9,10,11,12],example_model:[0,3,5],except:11,exist:[2,3,5],expect:12,explain:10,explan:[3,5],expon:1,extra:[3,5],extra_repr:[3,5],f1:[6,9],f:13,fals:[0,2,3,5,6,10,11],fast:10,favor:[3,5],featur:[0,2,13],feel:13,fetch_openml:13,few:13,fewer:[9,13],field:[3,5],file:2,fill_:[3,5],filter:[0,2,13],filter_bi:[0,6],find:[0,2,6],find_label_issu:[0,2,6,13],find_label_issues_using_argmax_confusion_matrix:6,find_predicted_neq_given:6,fine:2,finetun:[3,5],first:[2,13],fit:[0,2,5,12],five:2,fix:[12,13],flexibl:5,float16:[3,5],float32:13,float64:[3,5],fn:[3,5],fold:[0,2,6,8,11],follow:[0,2,3,5,6,13],forc:[0,2,5,10],forget:1,forget_r:1,forget_rate_schedul:1,form:[0,1,2,3,5,8,9,10],format:[0,2,3,5,6,8,9,11],former:[3,5],formula:6,forward:[1,3,5],found:[3,5,12,13],four:0,frac_nois:6,frac_zero_noise_r:10,fraction:[0,1,2,6,8,9,10],free:13,freez:[3,5],from:[0,1,2,3,5,6,8,9,10,12,13],fulli:[3,5],functor:9,futur:[3,5],g:[0,2,3,5,6,9,10,11],gan:[3,5],gener:[0,2,9,10,13],generate_n_rand_probabilities_that_sum_to_m:10,generate_noise_matrix:10,generate_noise_matrix_from_trac:10,generate_noisy_label:10,get:[0,2,3,5,12],get_buff:[3,5],get_extra_st:[3,5],get_label_issu:0,get_mnist_dataset:5,get_normalized_margin_for_each_label:11,get_param:[0,5],get_paramet:[3,5],get_self_confidence_for_each_label:11,get_sklearn_digits_dataset:5,get_submodul:[3,5],gist:2,git:12,github:[3,9,12],give:11,given:[0,1,3,5,6,8,10,11,12,13],good:[3,11],gpu1:[3,5],gpu:[3,5],grad:[3,5],grad_input:[3,5],grad_output:[3,5],gradient:[3,5],grai:13,greater:[0,2,9],guarante:[2,3,5,7,10],guess:[2,8],h_pad:13,ha:[0,2,3,5,6,8,9,12,13],had:[0,2],half:[3,5],handl:[3,5],handwritten:[5,13],happen:[6,10],hard:5,harder:2,have:[0,2,3,5,6,8,9,10,11,13],held:12,help:[3,5,12,13],helper:9,here:[2,9,12,13],high:[0,2,6,9,10],higher:[0,2,6,8,10,11],holdout:[0,2,11],hook:[3,5],host:[3,5],hot:[6,9],how:[1,2,3,5,8,11,13],howev:9,html:6,http:[3,6,9,11,12],hundr:13,i:[0,2,6,8,9,11],id:13,id_it:13,idea:11,ident:9,identifi:[11,12,13],idx:[3,5],idx_flip:10,ignor:[2,3,5],imagenet:12,imbdb:13,immedi:[3,5],implement:[0,2,3,5,8,9,10,12],impli:10,imposs:10,imshow:13,in_featur:[3,5],includ:[0,3,5,9,11],increas:[6,8],independ:[0,2],index:[6,11],indic:[2,5,6,11,12,13],individu:[3,5,11],inform:[3,5],inherit:[0,1],init:[3,5],init_weight:[3,5],initi:[3,5],initialize_lr_schedul:1,inplac:[3,5],input:[0,2,3,5,6,12],input_channel:3,instal:3,instanc:[0,3,5],instead:[0,2,3,5,6,8,10,11,13],instruct:12,int2onehot:9,int64:13,integ:[0,2,6,9,10,11],integr:[3,5],inv_noise_matrix:2,inv_noise_matrix_iter:2,invalid:[3,5],invers:[2,8,9],inverse_noise_matrix:[0,2,8,9],inverse_noise_rate_class_k:6,invok:[3,5],is_compat:9,issu:[0,2,6,11,12],item:[2,9],iter:[0,2,3,5,6,9],iteround:9,its:[2,3,5,6,11,13],itself:[3,5],j:[2,3,5,6],joint:[0,2,6,8,9],joint_estim:2,joint_matrix:9,just:[1,2,6,13],k:[0,2,6,8,9,10,11],k_:[0,2,8,9,10],k_y:[0,2,8,9,10],keep:0,keep_at_least_n_per_class:6,keep_var:[3,5],kei:[3,5],keyword:[3,5],known:[2,13],kwarg:[0,3,5],l:[3,5],label:[0,1,2,5,6,8,9,10,11],label_issues_idx:[6,11],label_issues_mask:[0,6,11],label_quality_scor:11,labels_maybe_with_error:0,larg:6,larger:10,last:5,latent:[0,2,6,8],latent_algebra:7,latter:[0,3,5],learn:[0,1,5,6,9,10],learnabl:10,learningwithnoisylabel:0,least:6,leav:0,left:[6,9,10],left_nam:9,len:[2,8,10,13],length:[0,1,6,9,10],less:10,let:[3,5,12,13],librari:5,like:[0,3,5,6,7,8,9,11,12],likelihood:[11,12],line:[3,5],linear:[3,5,13],linear_model:[0,12],link:6,list:[0,1,2,3,5,6,9,13],list_of_compatible_vers:9,littl:2,live:[3,5],ll:13,lnl:12,load:[3,5],load_state_dict:[3,5],loader:5,local:[3,5],log_interv:5,logist:[0,2,12],logisticregress:[0,2,12],logit:1,logreg:0,look:[3,5,13],loop:[2,8,9,10],loss:[0,1],loss_coteach:1,low:[9,10],lr:[1,5],m:[0,3,5,10],machin:0,made:2,magnifi:2,mai:[0,2,3,5,6,8,9,10,11],major:2,make:[2,3,5,6,9,10,12,13],manag:9,mani:2,manual:12,map:[0,3,5],margin:[2,6,8,11],marginal_p:[2,8],mask:[6,11],master:3,mat:2,match:[0,3,5,6],mathemat:[0,2],matplotlib:13,matric:[2,8],matrix:[0,2,6,8,9,10,11],matter:[6,9],max:[6,10,11],max_balls_per_bin:10,max_it:10,max_noise_r:10,max_prob:10,max_prob_not_label:11,max_trace_prob:10,maxim:6,maximum:10,mayb:0,mean:[0,1,2,5,8,10],mechan:[3,5],member:[3,5],memo:[3,5],memori:[3,5],memory_format:[3,5],method:[0,2,3,5,6,7,8,9,10,11,12,13],metric:9,min_balls_per_bin:10,min_noise_r:10,min_prob:10,min_trace_prob:10,minimum:[10,12],minu:11,minut:13,mislabel:[0,2,6,8,12],miss:[3,5],missing_kei:[3,5],ml:12,mnist:[5,12],mnist_784:13,mnist_pytorch:4,mode:[3,5],model1:1,model2:1,model:[0,1,2,3,5,6,8,11],model_select:13,model_skorch:13,modifi:[3,5,9],modul:[1,3,5,6,11],momentum:5,more:[0,2,3,5,6,10,12,13],most:[2,6],move:[3,5],movi:13,ms:9,multi:[0,2,3,5,6,9],multi_label:[2,6],multiclass:[0,6],multiclass_crossval_predict:6,multipl:9,multipli:6,multiprocess:[0,6],must:[0,1,2,3,5,6,8,9,11,12],n:[0,2,3,5,6,8,10,11,13],n_job:[0,6],n_output:3,name:[0,3,5,9],named_buff:[3,5],named_children:[3,5],named_modul:[3,5],named_paramet:[3,5],namedtupl:[3,5],natur:[0,10],ncol:13,necessari:[0,10],need:[0,2,3,5,6,12,13],nest:[0,3,5],net:[3,5,13],net_b:[3,5],net_c:[3,5],network:[0,3,5,13],neural:[0,13],neuralnetclassifi:13,never:[9,12],new_sum:9,ninja:6,nn:[1,3,5,13],no_cuda:5,no_grad:[3,5],nois:[0,2,6,8,9,10],noise_matrix:[0,2,8,9,10],noise_matrix_is_valid:10,noise_matrix_iter:2,noise_r:10,noisi:[0,1,2,5,6,8,9,10,11],non:[0,2,3,5,6,10],non_block:[3,5],none:[0,1,2,3,5,6,8,9,10],normal:[6,9,11],normalized_margin:[6,11],northcutt:0,note:[2,3,5,6,10,12],notion:0,np:[0,1,2,6,8,9,10,11],nrow:13,num_confident_bin:2,num_examples_s_equal_k:6,num_examples_with_s_equal_k:6,num_featur:[3,5],num_gradu:1,num_iter_per_epoch:1,num_label_issu:2,num_to_remove_per_class:6,number:[0,1,2,3,5,6,8,9,10],number_of_mislabeled_examples_in_class_k:6,numer:[0,2],numpi:[0,2,5,6,10,13],o:[3,5,11],obj:6,object:[0,1,3,5,9],obscur:13,observ:[0,2,8],obtain:[0,11,12],obviou:9,occur:[2,10],odd:13,off:[2,6,13],often:[2,8],onc:[3,5],one:[2,3,5,6,9,12,13],onehot2int:9,onehot:9,onehot_matrix:9,ones:[3,5,10,13],onli:[0,2,3,5,6,7,8,10,11],open:0,oper:[3,5,11],opposit:10,optim:[1,2,3,5],optimizer1:1,optimizer2:1,option:[2,3,5,8,9],order:[0,2,6,8,11,12],order_label_issu:11,ordered_label_issu:12,ordereddict:[3,5],org:[3,11],origin:[0,6,9],other:[0,2,3,5,6,8,9,10,12],otherwis:[3,5,6],our:13,out:[0,2,6,11,12],out_featur:[3,5],output:[1,2,3,5,9,10],over:[2,3,5],overfit:[2,12],overrid:5,overridden:[3,5],overview:13,own:[3,5,13],p:[0,2,6,8,9,10,11],p_:[2,6],packag:[0,7,13],pair:[2,6],panda:13,paper:0,parallel:[0,2,6],param:[0,3,5],paramet:[0,1,2,3,5,6,8,9,10,11,13],parse_arg:1,parser:1,part:[3,5],partial:12,particular:[3,5,6,10],pass:[0,3,5],path:[3,5],pdf:11,per:9,percent:2,perfect:[0,10],perfectli:0,perform:[0,2,3,5,10],persist:[3,5],perturb:2,pickl:[3,5],pickleabl:[3,5],pin:[3,5],pip:[12,13],pipelin:[0,5],place:[3,5],plot_exampl:13,plt:13,point:[3,5,12],poor:2,poorli:[2,8],popular:12,posit:[3,5,9],possibl:[0,2,3,5,6,8,10,11],potenti:[2,11,12],practic:2,pragma:10,pre:[3,5],precomput:8,pred:[0,6,9],pred_prob:[0,2,6,8,9,11,12,13],pred_proba:2,predict:[0,2,5,6,8,9,11,12],predict_proba:[0,2,5,13],predicted_neq_given:[0,6],prefix:[3,5],prepend:[3,5],preserv:[6,9],pretti:9,previous:6,print:[3,5,6,9,10,13],print_freq:1,print_inverse_noise_matrix:9,print_joint_matrix:9,print_noise_matrix:9,print_square_matrix:9,prior:[2,6,8,10],pro:2,prob_label:11,prob_s_eq_1:9,probabl:[0,2,5,6,8,9,10,11,12],problem:10,process:[0,6,13],produc:10,prone:0,proper:9,proport:2,provid:[0,2,3,5,6,8,10,11,12],proxi:2,prune:[0,2,6,12],prune_by_class:[0,6],prune_by_noise_r:[0,6],prune_count_matrix:6,prune_counts_matrix:[0,6],ps:[2,8],pseudocod:10,psx:12,pu:[0,9],pulearn:[0,9],py:[0,2,3,6,8,10],py_method:[2,8],pyplot:13,python:[6,10],pytorch:[0,1,3,5],pyx:[6,8,12],qualifi:[3,5],qualiti:11,queri:[3,5],quickli:1,quickstart:13,rais:[3,5],randint:9,random:[0,2,9,10],randomli:10,randomly_distribute_n_balls_into_k_bin:10,rang:[2,6,8,9,10,13],rank:2,rank_bi:11,ranked_label_issu:13,rate:[0,1,2,6,9,10],rate_schedul:1,re:[0,3,5],reach:9,real:12,reason:[0,2,3,5],receiv:[3,5],recip:[3,5],recomput:2,record:[3,5],recurs:[3,5],reduc:[6,12],reduce_prune_count:6,refer:[3,5],referenc:[3,5],reflect:[6,12],regist:[3,5],register_backward_hook:[3,5],register_buff:[3,5],register_forward_hook:[3,5],register_forward_pre_hook:[3,5],register_full_backward_hook:[3,5],register_paramet:[3,5],regress:[0,2,12],rel:6,relat:[0,2],reliabl:12,relu:13,remov:[0,3,5,6,12,13],removablehandl:[3,5],remove_dupl:[3,5],remove_noise_from_class:9,repeat:2,repeatedli:2,replac:10,repres:[2,6,8,9],represent:[3,5,9],requir:[0,2,3,5,6,8,9,10,11],requires_grad:[3,5],requires_grad_:[3,5],research:6,reshap:13,resolv:[3,5],respect:[3,5],rest:6,result:[2,3,5,9],retain:9,return_count:9,return_indices_of_off_diagon:2,return_indices_ranked_bi:[6,13],robust:[0,8],roc:6,round:[6,9,10],round_plac:9,round_preserving_row_tot:9,round_preserving_sum:9,row:[0,2,6,8,9,11],rp:0,run:[3,5],running_mean:[3,5],running_var:[3,5],runtim:[3,5],runtimeerror:[3,5],s:[0,2,3,5,6,9,11,12],s_label:2,sai:[3,5],same:[3,5,9,12],sampl:[0,2,11,12],sample_weight:[0,5],satisfi:[0,6,10],save:[3,5],schedul:1,scikit:5,score:[0,2,11,12],see:[0,2,3,5,6,9,11,13],seed:[0,2,5,10],self:[0,1,3,5,11],self_confid:[6,11,12,13],sequenti:[3,5,13],serial:[3,5],set:[0,2,3,5,6,9,10,12,13],set_extra_st:[3,5],set_param:[0,5],set_to_non:[3,5],sever:[3,5],shall:[3,5],shape:[0,1,2,6,8,9,10,11],share:6,share_memori:[3,5],share_memory_:[3,5],short_titl:9,shorthand:2,shortlist:13,should:[0,2,3,5,6,8,9,11,12],show:[3,5,9],shown:3,signatur:[3,5],silent:[3,5],similar:[3,5,9],similarli:[3,5],simpl:[0,3,5,13],simplenet:5,simplest:6,simpli:2,simplif:2,simplifi:2,sinc:[3,5],singl:[2,3,5,6],single_label:2,size:[3,5],sklearn:[0,2,5,9,12,13],sklearn_digits_test_s:5,skorch:[0,13],slow:2,small:[2,10],smaller:10,smallest:[0,6],so:[0,2,3,5,6,12],softmax:13,some:[0,2,3,5,6,8,9,11,12],someth:[3,5,11],sometim:2,sort:[11,13],sorted_index_method:12,sourc:[0,1,2,3,5,6,8,9,10,11,12],specif:13,specifi:[2,3,5,6],speed:[0,2,6,13],split:[0,2],squar:9,stabl:7,start:[3,12,13],state:[0,2,3,5,9],state_dict:[3,5],statement:6,still:5,stochast:10,storag:[3,5],store:[0,3,5],str:[0,2,3,5,6,8,9,11],strict:[3,5],strictli:[3,5],string:[3,5,9],subclass:[3,5],subfield:0,submodul:[3,5],subobject:[0,5],subplot:13,subsequ:[3,5],subset:[2,6,11],subtract:6,sum:[0,2,8,9,10],supervis:0,support:[2,3,5,6],sure:[0,6,9,11],suspici:13,t:[1,2,3,5,11],t_destin:[3,5],take:[3,5],target:[0,1,3,5,13],task:[0,2,6],teach:[1,3],technic:[3,5],tell:[1,12],templat:[0,5],tend:8,tensor:[1,3,5],tensorflow:0,term:[2,6,9],test:[0,5],test_batch_s:5,test_load:1,test_set:5,text:13,than:[0,2,6,9,10],thei:[0,1,2,3,5,6,7,9],them:[0,2,3,5],theori:0,therefor:[2,11],thi:[0,1,2,3,5,6,8,9,10,11,12,13],thing:5,those:2,thousand:12,thread:[0,6],three:[0,2],threshold:[0,2,6],thu:[3,5],tight_layout:13,tild:0,time:[2,3,5,9],timeit:9,titl:[9,13],tl:2,to_empti:[3,5],to_numpi:13,todo:6,too:2,top1:1,top5:1,top:[9,13],top_bn:3,top_nam:9,topk:1,torch:[1,3,5,13],torchvis:13,total:[2,6,9],trace:[2,10],tractabl:10,tradition:9,train:[0,1,2,3,5,9,13],train_idx:5,train_label:5,train_load:[1,5],train_loss:13,transit:[3,5],transpos:6,tri:[3,5,10],true_label:[0,2,6,8,9,10],true_labels_class_count:8,truth:2,tupl:[0,2,3,5],tutori:13,two:[0,2,3,5,12],type:[0,2,3,5,6,8,9,10,11],typevar:[3,5],typic:[3,5],uncertainti:0,unchang:[3,5],under:[2,3,5],understand:2,unexpect:[3,5],unexpected_kei:[3,5],uniform:2,uniformli:[6,10],union:[3,5],uniqu:[2,9],unknown:2,unless:[3,5],unlik:[0,6],unsuit:12,until:[6,10],up:[0,2,6,10,13],updat:[0,2,5],us:[0,1,2,3,5,6,7,8,10,11,13],user:[0,3,5,6],util:[1,3,5,7,8],valid:[0,2,6,8,10,11,12,13],valid_acc:13,valid_loss:13,valid_noise_matrix:10,valu:[0,1,2,3,5,6,8,9,10],value_count:9,variabl:[2,9,13],varieti:0,ve:12,vector:[0,2,6,8,9,11],verbos:[6,10],versa:2,version:[3,5,7],versionwarn:9,versu:2,via:[0,5,12,13],vice:2,view:[3,5,13],w:11,wa:[6,9],wai:[0,2],warn:[6,9],warning_already_issu:9,warning_str:9,we:[0,2,3,5,9,10,12,13],weak:0,weight:[0,1,3,5],well:[0,2,3,5,8,13],were:[2,5,12],what:[1,6,10],when:[0,2,3,5,6,8,9,10,12,13],where:[0,2,6,9,10,12,13],whether:[3,5,9,13],which:[0,2,3,5,8,11,12],whichev:11,whole:[3,5,13],whose:[3,5],why:9,window:[0,6],within:[2,3,5,7],without:[0,3,5,10],wmz:6,won:[3,5],word:2,work:[0,2,3,5,6,8,12],world:12,would:[0,2,3,5,6,12],wrap:[0,3,5,13],wrapper:0,x:[0,1,2,3,5,6,8,9,10,11,12,13],x_test:0,x_train:0,xpu:[3,5],y:[0,2,5,6,8,9,10,12,13],y_1:1,y_2:1,yield:[3,5,10],you:[0,2,3,5,6,10,11,12,13],your:[0,3,5,6,12],yourmodel:0,zero:[2,3,5,10],zero_grad:[3,5],zoom:13},titles:["classification","coteaching","count","cifar.cnn","example_models","mnist_pytorch","filter","internal","latent_algebra","util","noise_generation","rank","cleanlab documentation","Image Classification with PyTorch and Cleanlab"],titleterms:{"1":[12,13],"2":[12,13],"3":[12,13],"4":13,"5":13,"6":13,"7":13,cifar:3,classif:[0,13],classifi:13,cleanlab:[12,13],cnn:3,compat:13,comput:13,coteach:1,count:2,dataset:13,defin:13,depend:13,document:12,ensur:13,error:[12,13],exampl:13,example_model:4,fetch:13,filter:6,find:[12,13],find_label_issu:12,imag:13,instal:[12,13],intern:7,label:[12,13],latent_algebra:8,learn:13,learningwithnoisylabel:12,like:13,mislabel:13,mnist:13,mnist_pytorch:5,model:[12,13],most:13,next:13,noise_gener:10,noisi:12,out:13,potenti:13,predict:13,probabl:13,pytorch:13,quickstart:12,rank:11,requir:13,review:13,robust:12,run:13,s:13,sampl:13,scale:13,scikit:13,some:13,train:12,us:12,util:9,what:13,your:13}})